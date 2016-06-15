import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import TDDListItem from './TDDListItem';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


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

  it('contains a label and a checkbox', () => {
    const wrapper = mount(
      <div>
        <TDDListItem description="My Todo." completionStatus={false} />
      </div>
    );

    //Check the rendered output for a checkbox.
    const inputs = wrapper.find('input');
    expect(inputs).to.have.length.of(1);

    //Check the rendered output for a label
    const labels = wrapper.find('label');
    expect(labels).to.have.length.of(1);
  });

  it('sets label text through description prop', () => {
    const wrapper = mount(
      <div>
        <TDDListItem description="My Todo." completionStatus={false} />
      </div>
    );

    const labels = wrapper.find('label');
    expect(labels.text()).to.equal("My Todo.");
  });

  it('sets completion status to false by default', () => {
    const wrapper = shallow(
      <div>
        <TDDListItem description="My Todo." />
      </div>
    );
    
    const componentProps = wrapper.props().children.props;
    expect(componentProps.completionStatus).to.equal(false);
  });

});
