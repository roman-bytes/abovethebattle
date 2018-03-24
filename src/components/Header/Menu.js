import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <ul className='nav'>
        <li>ANXIETY + DEPRESSION</li>
        <div className='divider' />
        <li>FAITH</li>
        <div className='divider' />
        <li>WOMEN’S ISSUES</li>
        <div className='divider' />
        <li>MARRIAGE + LOVE</li>
      </ul>
    );
  }
}
