import React from "react";
import unsplash from "../api/unsplash";
import SeasonDisplay from './weather/seasonDisplay';
import LoadingItem from './generalComponents/loadingItem';
import Searchbar from './generalComponents/searchBar';
import ImageList from './ImageList/imageList';

class App extends React.Component {
    state = { lat: null, lon: null, errorMessage: null, city: null, weatherState: null, degreee: null, images: [] };

    componentDidMount() {
        console.log("I just mounted");
        window.navigator.geolocation.getCurrentPosition(
            pos => (this.getWeather(pos.coords.latitude, pos.coords.longitude)),
            err => this.setState({ errorMessage: err.message })
        );
    }
    getWeather(latitude, longtitude) {
        const openWeatherId = "OPENWEATHERID";
        this.setState({ lat: latitude, lon: longtitude });
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longtitude + "&appid="+openWeatherId+"&units=metric")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        city: result.name,
                        weatherState: result.weather["0"].description,
                        degree: result.main.temp
                    });
                    return result;
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> ERROR: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} city={this.state.city} weatherState={this.state.weatherState}
                degree={this.state.degree} />
        }
        return <LoadingItem message="Please allow your Browser to locate your position" />;
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({
            images: response.data.results
        });
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: '10px', textAlign: "center" }}>
                    <Searchbar onSubmit={this.onSearchSubmit} />
                    Found : {this.state.images.length} images
                </div>
                <ImageList images = {this.state.images}></ImageList>
                <div className="border-aqua">
                    {this.renderContent()}
                </div>
            </div>
        )

    }

}
export default App;
