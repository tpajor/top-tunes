import * as React from 'react';
import { shallow } from 'enzyme';

import Error, { IProps } from './Error';

function setup() {
  const props: IProps = {
    error: 'error',
  };

  const wrapper = shallow(<Error {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('Error component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
