import * as React from 'react';
import { shallow } from 'enzyme';

import NoResults from './NoResults';

function setup() {

  const wrapper = shallow(<NoResults />);

  return {
    wrapper,
  };
}

describe('NoResults component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
