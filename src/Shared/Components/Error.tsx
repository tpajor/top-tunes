import * as React from 'react';

export interface IProps {
  error: string;
}

const Error = ({ error }: IProps) => {
  return (
    <h4 className='text text--error'>
      {`${error}`}<br />
      Please try again later
    </h4>
  );
};

export default Error;
