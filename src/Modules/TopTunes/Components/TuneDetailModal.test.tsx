import * as React from 'react';
import { shallow } from 'enzyme';
import { History } from 'history';

import TuneDetailModal from './TuneDetailModal';
import { iTunes } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';
import { Link } from 'react-router-dom';
import TuneDetailTextItem from './TuneDetailTextItem';

function setup() {
  const props = {
    history: { push: jest.fn() } as unknown as History,
    tune: iTunes[0],
  };

  const wrapper = shallow(<TuneDetailModal {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('TuneDetailModal component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate if there is no tune present in props', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({ ...props, tune: undefined });
    const instance = wrapper.instance();

    instance.componentDidMount!();

    expect(props.history.push).toHaveBeenCalled();
  });

  it('should navigate in handleClosingAnimation mathod after waiting for css animation to complete', () => {
    const { wrapper, props } = setup();
    wrapper.setState({ isClosing: false });

    jest.useFakeTimers();

    const event = {
      preventDefault: jest.fn(),
    };

    wrapper.find(Link).simulate('click', event);

    expect(event.preventDefault).toHaveBeenCalled();

    expect(wrapper.state('isClosing')).toBe(true);

    jest.runAllTimers();

    expect(props.history.push).toHaveBeenCalled();

  });

  it('should format date to string in formatDate method', () => {
    const { wrapper, props } = setup();
    let date = '1902-02-02';

    wrapper.find(TuneDetailTextItem).forEach((item) => {
      if (item.prop('title') === 'Released') {
        expect(item.prop('text')).toEqual(date);
      }
    });

    date = '1910-10-10';
    wrapper.setProps({ ...props, tune: { ...props.tune, releaseDate: new Date(10, 10, 10, 10, 10, 10, 10) } });
    wrapper.find(TuneDetailTextItem).forEach((item) => {
      if (item.prop('title') === 'Released') {
        expect(item.prop('text')).toEqual(date);
      }
    });
  });

  it('should format date to string in formatDate method', () => {
    const { wrapper, props } = setup();
    let producer: string = '';
    for (let i = 0; i < 100; i += 1) {
      producer += i;
    }

    wrapper.setProps({ ...props, tune: { ...props.tune, rights: producer } });

    wrapper.find(TuneDetailTextItem).forEach((item) => {
      if (item.prop('title') === 'Producer') {
        expect(item.prop('text')).toEqual(`${producer.substr(0, 75)}...`);
      }
    });
  });
});
