import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('App', () => {

  it('renders component', () => {
    const wrapper = shallow(
      <div>
        <TDDListItem>
          <div class="tddListItem"></div>
        </TDDListItem>
      </div>
    );

    expect(wrapper.contains(<div class="tddListItem"></div>)).to.equal(true);

  });

});
