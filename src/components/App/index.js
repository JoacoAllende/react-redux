import React from 'react'
import PostList from '../PostList'
import BackgroundColorContext from '../../contexts/BackgroundColorContext'

class App extends React.Component {

    static contextType = BackgroundColorContext

    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: "green"
        }
    }

    onBackgroundColorChange = (backgroundColor) => {
        this.setState({backgroundColor})
    }

    render() {
        return (
            <BackgroundColorContext.Provider value={this.state.backgroundColor}>
                <div className="ui container">
                    <div className="ui segment">
                        <button className="ui red button" onClick={() => this.onBackgroundColorChange('red')}>Red</button>
                        <button className="ui orange button" onClick={() => this.onBackgroundColorChange('orange')}>Orange</button>
                        <button className="ui yellow button" onClick={() => this.onBackgroundColorChange('yellow')}>Yellow</button>
                        <button className="ui olive button" onClick={() => this.onBackgroundColorChange('olive')}>Olive</button>
                        <button className="ui green button" onClick={() => this.onBackgroundColorChange('green')}>Green</button>
                        <button className="ui teal button" onClick={() => this.onBackgroundColorChange('teal')}>Teal</button>
                        <button className="ui blue button" onClick={() => this.onBackgroundColorChange('blue')}>Blue</button>
                        <button className="ui violet button" onClick={() => this.onBackgroundColorChange('violet')}>Violet</button>
                        <button className="ui purple button" onClick={() => this.onBackgroundColorChange('purple')}>Purple</button>
                        <button className="ui pink button" onClick={() => this.onBackgroundColorChange('pink')}>Pink</button>
                        <button className="ui brown button" onClick={() => this.onBackgroundColorChange('brown')}>Brown</button>
                        <button className="ui grey button" onClick={() => this.onBackgroundColorChange('grey')}>Grey</button>
                        <button className="ui black button" onClick={() => this.onBackgroundColorChange('black')}>Black</button>
                    </div>
                    <PostList />
                </div>
            </BackgroundColorContext.Provider>
        )
    }
}

export default App