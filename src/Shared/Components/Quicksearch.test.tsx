import * as React from 'react';
import { shallow } from 'enzyme';
import { Subject } from 'rxjs';

import Quicksearch, { IProps } from './Quicksearch';

function setup() {
  const props: IProps = {
    term$: new Subject<string>(),
  };

  const wrapper = shallow(<Quicksearch {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('Quicksearch component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('Shuld add term to Subject on input value change', () => {
    const { wrapper } = setup();
    const event = {
      target: {
        value: 'test',
      },
    };
    spyOn(Subject.prototype, 'next');

    wrapper.find('input').simulate('change', event);

    expect(Subject.prototype.next).toHaveBeenCalledWith(event.target.value);
  });
});
