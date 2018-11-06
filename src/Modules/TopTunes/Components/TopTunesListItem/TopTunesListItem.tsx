import * as React from 'react';

interface IProps {
  item: any;
  position: number;
}

const TopTunesListItem = ({ item, position }: IProps) => {
  return (
    <div className='container container--item'>
      <h5 className='text listItem-title'>
        <span className='text listItem-title--highlight'>
          {+position + 1}
        </span>
        {item.title.label}
      </h5>
    </div>
  );
};

export default TopTunesListItem;
