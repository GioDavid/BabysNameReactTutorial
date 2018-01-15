import React, { Component } from 'react';
import NameList from './components/nameList';
import Credit from './components/Credit';
import Search from './components/Search';
import ShortList from './components/ShortList';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Search/>
        <ShortList/>
        <main>
          <NameList data={this.props.data}>
          </NameList>
          <Credit/>
        </main>
      </div>
    );

  }
}

export default App;
