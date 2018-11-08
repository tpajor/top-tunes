import * as React from 'react';

interface IProps {
  text?: string;
}

class Spinner extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className='container container--list-info'>
        <div className='container container--spinner-icon spinner-rotator'/>
        {this.props.text ? <p className='text text--list-info spinner-dots'>{this.props.text}</p> : ''}
      </div>
    );
  }
}

export default Spinner;
