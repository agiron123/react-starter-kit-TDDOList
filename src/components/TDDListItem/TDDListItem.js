/**
 * Created by andre on 6/13/16.
 */
import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TDDListItem.css';

//We need to design our component so that we actually know what to write a test for.
//In our example, we want a checkbox to specify if the item is complete or not.
//We also want a label to display the contents of the todo item.

//Two important properties that we have for this component:
//completionStatus, and description (the text for the TODO)
//completionStatus and description will be changed by a parent components, so it will not be included in our state.

class TDDListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tddListItem">
        <input type="checkbox" id="cbox" value="checkbox"/> <label id="label" for="cbox">Description goes here.</label>
      </div>
    );
  }
}

//TODO: Figure out how to use isomorphic style loader with mocha tests.
//export default withStyles(s)(TDDListItem);
export default TDDListItem;
