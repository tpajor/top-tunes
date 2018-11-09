import * as React from 'react';

interface IProps {
  title: string;
  text: string | number;
}

const TuneDetailTextItem = ({ title, text }: IProps) => {
  return (
  <div className='container container--modal-item'>
    <h2 className='text text--modal-item-title'>
      {title}
    </h2>

    <p className={`text ${title === 'Producer' ? 'text--modal-item-rights' : 'text--modal-item-text'}`}>
      {text}
    </p>
  </div>
  );
};

export default TuneDetailTextItem;
