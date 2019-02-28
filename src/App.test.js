import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import App from './App';
 
describe('<App />', () => {
  it('renders three <App /> components', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());// console log() DOM
    expect(wrapper).toMatchSnapshot();// Snapshot Test
    console.log('ddee', expect(wrapper).toBeTruthy());
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('.as').text()).toEqual('aaaa');
    expect(wrapper.find('.as').text()).toEqual('aaaa');
    expect(wrapper.find('.as').text()).toBe('aaaa');
    expect(wrapper.find('.as')).toBeTruthy();
    expect(wrapper.find('.as').text()).toHaveLength(4);
    expect(wrapper.find('.as').not('.a').text()).toHaveLength(4);
    expect(wrapper.find('p').children().text()).toHaveLength(4);
    expect(wrapper.find('.in-bar').text()).toHaveLength(5);
    expect(wrapper.find('.in-bar').text()).toHaveLength(5);
  });
});