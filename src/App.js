import React, { Component } from 'react';
import NameList from './components/nameList';
import Credit from './components/Credit';
import Search from './components/Search';
import ShortList from './components/ShortList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      filterText: '',
      favourites: []
    } 
  }

  filterUpdate(value) {
    this.setState(
    {
      filterText: value
    }
    )

  }

  addFavourite(id) {
    const favList = this.state.favourites.concat([id])
    this.setState({
      favourites: favList
    })

  }

  render() {

    return (
      <div className="App">
        <Search filterText={this.state.filterText} 
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <ShortList
        favourites= {this.state.favourites}
        data={this.props.data}
        />
        <main>
          <NameList data={this.props.data}
          filterText={this.state.filterText}
          addFavourite={this.addFavourite.bind(this)}>
          </NameList>
          <Credit/>
        </main>
      </div>
    );

  }
}

export default App;
