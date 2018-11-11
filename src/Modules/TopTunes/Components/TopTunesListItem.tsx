import * as React from 'react';
import { Link } from 'react-router-dom';

import { urls } from '../../../Routing/urls';
import IITune from '../../../Shared/Interfaces/models/IITune';

export interface IProps {
  item: IITune;
  position: number;
  iteration: number;
}

const TopTunesListItem = ({ item, position, iteration }: IProps) => {
  return (
    <Link
      className={`link link--list-item${iteration % 2 === 0 ? '-even' : '-odd'}`}
      to={urls.reactRouter.topTunesDetailCreate(position)}
    >
      <h5 className='text text--list-item-title'>
        <span className='text text--list-item-title text--highlight'>
          {position + 1}
        </span>
        {item.title}
      </h5>
    </Link>
  );
};

export default TopTunesListItem;
