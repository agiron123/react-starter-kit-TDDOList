import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';
import s from './Header.css';

describe('App', () => {

  it('renders Header correctly', () => {
    const wrapper = shallow(
      <div>
      <Header>
        <div class="test"></div>
      </Header>
      </div>
    );

    expect(wrapper.contains(<div class="test"></div>)).to.equal(true);

  });

});
