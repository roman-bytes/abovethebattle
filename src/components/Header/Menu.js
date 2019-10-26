import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

export default class Menu extends Component {
  render() {
    const { logo, menuState, menuToggle } = this.props;

    return (
      <div
        className={classNames(
          'navWrap',
          menuState ? 'open-menu' : 'close-menu'
        )}
        aria-hidden={!menuState}
      >
        <button
          className="close-button"
          onClick={() => menuToggle()}
          type="button"
          aria-label="close menu"
        >
          <FontAwesomeIcon icon={['fas', 'times']} />
        </button>
        <Img sizes={logo} ariaHidden="true" alt="Above the battle logo" />
        <h2>ABOVE THE BATTLE</h2>
        <div className="line" />
        <ul className="nav">
          <li>
            <Link to={'/categories/anxiety'} onClick={() => menuToggle()}>
              ANXIETY
            </Link>
          </li>
          <li>
            <Link to={'/categories/depression'} onClick={() => menuToggle()}>
              DEPRESSION
            </Link>
          </li>
          <li>
            <Link to={'/categories/faith'} onClick={() => menuToggle()}>
              FAITH
            </Link>
          </li>
          <li>
            <Link
              to={"/categories/women's%20issues"}
              onClick={() => menuToggle()}
            >
              WOMEN’S ISSUES
            </Link>
          </li>
          <li>
            <Link to={'/categories/marriage'} onClick={() => menuToggle()}>
              MARRIAGE
            </Link>
          </li>
          <li>
            <Link to={'/categories/love'} onClick={() => menuToggle()}>
              LOVE
            </Link>
          </li>
          <li>
            <Link to={'/about'} onClick={() => menuToggle()}>
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  logo: PropTypes.object,
  menuState: PropTypes.bool,
  menuToggle: PropTypes.func
};
