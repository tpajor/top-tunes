import * as React from 'react';
import { mount } from 'enzyme';
import { History } from 'history';

import TuneDetailModalLoadble from './TuneDetailModalLoadble';
import { IProps } from '../Components/TuneDetailModal';

function setup() {
  const props: IProps = {
    history: {
      push: jest.fn(),
    } as unknown as History,
  };

  const wrapper = mount(<TuneDetailModalLoadble {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('TuneDetailModalLoadble component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
