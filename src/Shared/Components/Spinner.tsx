import * as React from 'react';

interface IProps {
  text?: string;
}

class Spinner extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className='container container--list-info'>
        <div className='container container--spinner-icon'/>
        {this.props.text ? <p className='text text--spinner'>{this.props.text}</p> : ''}
      </div>
    );
  }
}

export default Spinner;
