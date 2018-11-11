import * as React from 'react';
import { shallow } from 'enzyme';

import Spinner, { IProps } from './Spinner';

function setup() {
  const props: IProps = {
    text: 'LOADING',
  };

  const wrapper = shallow(<Spinner {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('Spinner component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should not render text if it was not passed in props', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('p').length).toBe(1);

    wrapper.setProps({ ...props, text: undefined });

    expect(wrapper.find('p').length).toBe(0);
  });
});
