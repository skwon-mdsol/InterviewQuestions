import React from 'react';

export default class BadComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      currentPage: 1
    };
  }

  componentDidUpdate ({ changedPage }) {
    this.setState({ currentPage: 2 });
  }

  render () {
    return <div>{this.state.currentPage}</div>;
  }
}