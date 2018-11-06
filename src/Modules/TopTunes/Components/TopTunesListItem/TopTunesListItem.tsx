import * as React from 'react';

import './TopTunesListItem.scss';

interface iProps {
  item: any;
  position: number;
};

const TopTunesListItem = ({ item, position }: iProps) => {
  return (
    <div className='container--item'>
      <h5 className='item-title'>
        <span className='item-title--position'>
          {+position + 1}
        </span>
        {item.title.label}
      </h5>
    </div>
  );
}

export default TopTunesListItem;
