import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

function setup() {
  const props = {};

  const wrapper = shallow(<App {...props} />);

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
});
