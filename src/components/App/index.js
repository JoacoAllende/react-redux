import React from "react";
import PostList from "../PostList";
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
          <PostList />
        </div>
      </BackgroundColorContext.Provider>
    );
  }
}

export default App;
