import React from "react";

class Searchbar extends React.Component {
    state = {
        term: "Hello there!"
    }
    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search image</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(evt) => this.setState({ term: evt.target.value })}>
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Searchbar;