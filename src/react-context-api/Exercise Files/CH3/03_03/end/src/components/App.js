import React, { Component } from 'react';
import './App.css';
import News from './News/News';

const UserData = React.createContext();
export const UserConsumer = UserData.Consumer;

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleName = () => {
      this.setState(state => ({
        name:
          state.name === 'Manny Henri'
          ? 'Somebody else'
          : 'Manny Henri'
      }))
    }

    this.state = {
      news: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      name: 'Manny Henri',
      toggleName: this.toggleName,
    };
  }

  render() {
    return (
      <UserData.Provider value={this.state}>
        <div className="containwer-fluid">
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper indigo lighten-4">
                <a href="/" className="bran-logo center">My Feed</a>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col s12">
              <News news={this.state.news} />
            </div>
          </div>
        </div>
      </UserData.Provider>
    );
  }
}

export default App;
