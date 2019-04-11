import React from 'react';
import SupportSection from '../components/SupportSection.jsx';
import {shallow, mount} from 'enzyme';

test('<SupportSection/>', () => {
  let wrapper = shallow(<SupportSection/>);
  expect(wrapper.exists()).toBe(true);
});