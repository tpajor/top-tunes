import * as React from 'react';
import { shallow } from 'enzyme';

import TopTunesListItem, { IProps } from './TopTunesListItem';
import { iTunes } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';

function setup() {
  const props: IProps = {
    item: iTunes[0],
    position: 2,
    iteration: 2,
  };

  const wrapper = shallow(<TopTunesListItem {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('TopTunesListItem component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render link with even class if iteretion props is an even number', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('Link').hasClass('link link--list-item-even')).toBe(true);

    wrapper.setProps({ ...props, iteration: 1 });

    expect(wrapper.find('Link').hasClass('link link--list-item-odd')).toBe(true);
  });
});
