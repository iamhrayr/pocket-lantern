import Container from './Container';
import { shallow } from 'enzyme';

describe('<Container />', () => {
  test('lolo', () => {
    const wrapper = shallow(<Container />);
    console.log(wrapper.debug());
    expect('a').toEqual('a');
  });
});
