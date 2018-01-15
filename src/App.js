import React, { Component } from 'react';
import NameList from './components/nameList';
import Credit from './components/Credit';

class App extends Component {
  render() {

    return (
      <div className="App">
        <NameList data={this.props.data}>
        </NameList>
        <Credit/>
      </div>
    );

  }
}

export default App;
