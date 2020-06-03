import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "../Header";
import PostList from "../PostList";
import PhotoList from "../PhotoList";
import BackgroundColorContext from "../../contexts/BackgroundColorContext";
import { buttonsArray } from "../../utils";

class App extends React.Component {
  static contextType = BackgroundColorContext;

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "green",
    };
    this.onBackgroundColorChange = this.onBackgroundColorChange.bind(this);
  }

  onBackgroundColorChange(e) {
    this.setState({ backgroundColor: e.target.value });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <BackgroundColorContext.Provider value={backgroundColor}>
        <div className="ui container">
          <BrowserRouter>
            <div className="ui segment">
              {buttonsArray.map(({ color, text }) => {
                return (
                  <button
                    key={color}
                    value={color}
                    className={`ui ${color} button`}
                    onClick={this.onBackgroundColorChange}
                  >
                    {text}
                  </button>
                );
              })}
            </div>
            {/* <Route path="/" exact /> */}
            <Header />
            <Route path="/posts" component={PostList} />
            <Route path="/photos" component={PhotoList} />
          </BrowserRouter>
        </div>
      </BackgroundColorContext.Provider>
    );
  }
}

export default App;
