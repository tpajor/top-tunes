import * as React from 'react';

export interface IProps {
  text?: string;
}

const Spinner = ({ text }: IProps) => {
  return (
    <div className='container container--list-info'>
      <div className='container container--spinner-icon spinner-rotator'/>
      {text ? <p className='text text--list-info spinner-dots'>{text}</p> : ''}
    </div>
  );
};

export default Spinner;
