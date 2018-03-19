import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';
import FilterList from './components/FilterList';

class App extends Component {
  state = {
    image: 'https://d3nlwl9o95mzyc.cloudfront.net/images/Macariopei/1117/marvel-infinity-war-0.jpg',
    selectedFilter: '',
    settings: {
      contrast: 100,
      hue: 0,
      brightness: 100,
      saturate: 100,
      sepia: 0
    }
  }

  handleChange = event => {
    const setting = event.target.id;
    const value = event.target.value;
    const settings = { ...this.state.settings, [setting]: value };

    this.setState({ selectedFilter: '', settings });
  }

  reset = (e) => {
    e.preventDefault();
    this.setState({
      settings: {
        contrast: 100,
        hue: 0,
        brightness: 100,
        saturate: 100,
        sepia: 0
      }
    });
  }

  onChange = (e) => {
    let val = e.target.value;
    this.setState({image: val})
  }

  updateSettings = (selectedFilter, settings) => {
    this.setState({ selectedFilter, settings });
  }
  render() {
      const { image, selectedFilter, settings} = this.state;

        return (
            <div className="app">
              <Header title="Reactagram" />

              <section className="content">
                <Settings settings={settings} handleChange={this.handleChange} image={image} reset={this.reset} onChange={this.onChange}/>
                <main className="main">
                  <Filter settings={settings}>
                    <Image src={image} />
                  </Filter>

                  <FilterList
                    image={image}
                    settings={settings}
                    selectedFilter={selectedFilter}
                    updateSettings={this.updateSettings} />
                </main>
              </section>

            </div>
        );
    }
}

export default App;
