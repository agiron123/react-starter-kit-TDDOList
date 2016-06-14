import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import TDDListItem from './TDDListItem';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
global.navigator = {userAgent: 'nodejs'};

describe('TDDListItem', () => {

  it('renders TDDListItem', () => {
    const wrapper = shallow(
      <div>
        <TDDListItem>
          <div class="tddListItem"></div>
        </TDDListItem>
      </div>
    );

    expect(wrapper.contains(<div class="tddListItem"></div>)).to.equal(true);
  });

  it('allows us to pass in props', () => {
    const wrapper = shallow(
      <div>
        <TDDListItem description="My Todo." completionStatus={false} />
      </div>
    );

    const componentProps = wrapper.props().children.props;
    expect(componentProps.description).to.equal("My Todo.");
    expect(componentProps.completionStatus).to.equal(false);
  });

});
