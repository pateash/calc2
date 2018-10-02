// @flow
import React, { Component } from 'react';
import Calc from './Calc';

type Props = {};


/*
TODO:5 till now we are using HomePage.js and not able to figure out, from where control is coming,
so we are just using that for now, and in place of Home, we are rendering Calc for now.
 */
export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Calc/>;
  }
}
