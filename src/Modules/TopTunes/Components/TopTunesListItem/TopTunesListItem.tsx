import * as React from 'react';

interface IProps {
  item: any;
  position: number;
}

const TopTunesListItem = ({ item, position }: IProps) => {
  return (
    <div className='container container--list-item'>
      <h5 className='text text--list-item-title'>
        <span className='text text--list-item-title text--highlight'>
          {+position + 1}
        </span>
        {item.title.label}
      </h5>
    </div>
  );
};

export default TopTunesListItem;
