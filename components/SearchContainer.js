import React from 'react';
import { render } from 'react-dom';
import Search from './Search';
import Influencer from './Influencer';
import Fetch from 'isomorphic-unfetch';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      influencers: {
        "influencer1": {
          "name": "Jurriaan van der Broek",
          "photo": "/static/assets/images/man-1.png",
          "official": "@rhia.official",
          "description": "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.",
          "following": "495",
          "fans": "3.4m",
          "hearts": "123.9m"
        },
        "influencer2": {
          "name": "Matthew Lina",
          "photo": "/static/assets/images/man-2.png",
          "official": "@rhia.official",
          "description": "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.",
          "following": "495",
          "fans": "3.4m",
          "hearts": "123.9m"
        }
        ,
        "influencer3": {
          "name": "Langke Zambo",
          "photo": "/static/assets/images/man-3.png",
          "official": "@rhia.official",
          "description": "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.",
          "following": "495",
          "fans": "3.4m",
          "hearts": "123.9m"
        }
      }
    }

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearchQueryChange(e) {
    this.setState({searchQuery: e.target.value});
  }

  onSearch() {
    fetch('https://1jzxrj179.lp.gql.zone/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ accounts { name } }' }),
    })
    .then(res => res.json())
    .then(this.setState({influencers: {
        "influencer1": {
          "name": "Ali",
          "photo": "/static/assets/images/man-1.png",
          "official": "@temo.official",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          "following": "221",
          "fans": "5.9m",
          "hearts": "97.2m"
        },
        "influencer2": {
          "name": "Aqib",
          "photo": "/static/assets/images/man-2.png",
          "official": "@temo.official",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          "following": "221",
          "fans": "5.9m",
          "hearts": "97.2m"
        }
        ,
        "influencer3": {
          "name": "Atlas",
          "photo": "/static/assets/images/man-3.png",
          "official": "@temo.official",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          "following": "221",
          "fans": "5.9m",
          "hearts": "97.2m"
        }
      }}));
  }

  render() {
    const {influencers, searchQuery} = this.state;

    let influencersList = Object.keys(influencers).map(function(key) {
      return <Influencer keys={key} influencer={influencers[key]} />
    });

    return <div>
      <Search
        searchQuery={searchQuery}
        onChange={this.onSearchQueryChange}
        search={this.onSearch}
      />
      <p className="account-title">See stats for your account</p>
      <div className="finda-reporter">
        {influencersList}
      </div>
      <style jsx>{`
        .finda-reporter {
          display: grid;
          grid-template-columns: 32% 32% 32%;
          grid-gap: 3%;
          margin-top: 80px;
        }
      `}</style>    
    </div>;
  }
}

export default SearchContainer;