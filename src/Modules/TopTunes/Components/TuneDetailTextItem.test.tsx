import * as React from 'react';
import { shallow } from 'enzyme';

import TuneDetailTextItem, { IProps } from './TuneDetailTextItem';

function setup() {
  const props: IProps = {
    title: 'Mock Title',
    text: 'Some Text',
  };

  const wrapper = shallow(<TuneDetailTextItem {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('App component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render different class if props title is "Producer"', () => {
    const { wrapper, props } = setup();

    wrapper.setProps({ ...props, title: 'Producer' });

    expect(wrapper.find('p').hasClass('text text--modal-item-rights')).toBe(true);
  });
});
