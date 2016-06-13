/**
 * Created by andre on 6/13/16.
 */
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TDDListItem.css';

function TDDListItem() {
  return (
    <div className={"tddListItem"}></div>
  );
}

export default withStyles(s)(TDDListItem);
