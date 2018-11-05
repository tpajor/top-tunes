import * as React from 'react';
import axios from 'axios';

import './TopTunesList.scss';

class TopTunesList extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      allIds: [],
      byIds: [],
    };
  }

  componentDidMount() {
    axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then((res: any) => {
      const acc = [];
      for (let i = 0; i < res.data.feed.entry.length; i++) {
        acc.push(i);
      }

      this.setState({ byIds: res.data.feed.entry, allIds: acc });
    });
  }

  render() {
    return (
      <div className='container'>
        <h3>
          List
        </h3>
        <br/>
        {this.state.allIds.length > 0 ? this.state.allIds.map((id: any) => 
          <p key={id}>
            {this.state.byIds[id].title.label}
          </p>  
        ) : 'loading'}
        <br/>
      </div>
    );
  }
}

export default TopTunesList;
