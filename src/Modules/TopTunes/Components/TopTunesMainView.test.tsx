import * as React from 'react';
import { shallow } from 'enzyme';

import TopTunesMainView, { IProps } from './TopTunesMainView';

function setup() {
  const props: IProps = {
    location: 'test',
  };

  const wrapper = shallow(<TopTunesMainView {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('TopTunesMainView component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
