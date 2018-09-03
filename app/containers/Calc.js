// @flow
import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Buttons from '../components/Buttons/Buttons';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="h-screen">
        <Input/>
        <Buttons/>
      </div>
    );
  }
}
