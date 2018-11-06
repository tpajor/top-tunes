import * as React from 'react';
import { Subject } from 'rxjs';

interface IProps {
  term$: Subject<string>;
}

class Quicksearch extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.term$.next(event.target.value);
  }

  render() {
    return (
      <div className="container container-formControl">
        <input 
          type="text" 
          className='input form-input--search' 
          placeholder="Type here to filter the list"
          onChange={this.handleInputChange}
        />
        <div className="spyglass"></div>
      </div>
    );
  }
}

export default Quicksearch;
