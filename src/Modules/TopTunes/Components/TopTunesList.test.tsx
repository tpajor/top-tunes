import * as React from 'react';
import { shallow } from 'enzyme';
import TopTunesList, { IProps, IState } from './TopTunesList';
import { iTunes } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';
import { Subject } from 'rxjs';

const initialState: IState = {
  termChange$: new Subject<string>(),
};

function setup() {
  const props: IProps = {
    filteredIds: [ 0, 1, 2 ],
    byIds: {
      0: iTunes[0],
      1: iTunes[1],
      2: iTunes[2],
    },
    isLoading: false,
    error: '',
    location: 'location',
    getiTunesStart: jest.fn(),
    filteriTunes: jest.fn(),
  };

  const wrapper = shallow(<TopTunesList {...props} />);

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

  it('should call filteriTunes when next is called on termChange$', (done) => {
    const { wrapper, props } = setup();
    wrapper.setState({ ...initialState });

    wrapper.instance().componentDidMount!();

    const term = 'test';

    (wrapper.state('termChange$') as Subject<string>).next(term);

    setTimeout(
      () => {
        expect(props.filteriTunes).toHaveBeenCalledWith(term);
        done();
      },
      2000
    );
  });

  it('should render Spinner if isLoading flag from props is set', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({ ...props, isLoading: true });

    expect(wrapper.find('Spinner').length).toBe(1);
    expect(wrapper.find('Error').length).toBe(0);
    expect(wrapper.find('NoResults').length).toBe(0);
    expect(wrapper.find('TopTunesListItem').length).toBe(0);
  });

  it('should render Error if error prop is not empty', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({ ...props, error: 'error' });

    expect(wrapper.find('Spinner').length).toBe(0);
    expect(wrapper.find('Error').length).toBe(1);
    expect(wrapper.find('NoResults').length).toBe(0);
    expect(wrapper.find('TopTunesListItem').length).toBe(0);
  });

  it('should render NoResults if filterByIds array is empty', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({ ...props, filteredIds: [] });

    expect(wrapper.find('Spinner').length).toBe(0);
    expect(wrapper.find('Error').length).toBe(0);
    expect(wrapper.find('NoResults').length).toBe(1);
    expect(wrapper.find('TopTunesListItem').length).toBe(0);
  });

  it('should render ListItems in number equal to filteredIds array length if everything is in order', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('Spinner').length).toBe(0);
    expect(wrapper.find('Error').length).toBe(0);
    expect(wrapper.find('NoResults').length).toBe(0);
    expect(wrapper.find('TopTunesListItem').length).toBe(props.filteredIds.length);
  });
});
