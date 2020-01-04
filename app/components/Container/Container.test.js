import React from 'react';
import Container from './Container';
import { shallow } from 'enzyme';

describe('<Container />', () => {
  it('renders without crashing', () => {
    shallow(<Container />);
  });

  it('should render styled wrapper', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.find('Styled(View)').length).toBe(1);
  });

  it('should render non transparent wrapper by default', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.find('Styled(View)').prop('transparent')).toBeFalsy();
  });

  it('should render content inside <ScrollView />', () => {
    const wrapper = shallow(<Container />);
    console.log(wrapper.debug());
    expect(wrapper.find('ScrollViewMock').length).toBe(1);
  });
});
