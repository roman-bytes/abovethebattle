import React, { Component } from 'react';
import PropTypes from 'prop-types';
import brands from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Hamburger from '../Header/Hamburger';
import Menu from '../Header/Menu';

export default class Social extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  }

  render() {
    const { logo } = this.props;
    const { showMenu } = this.state;

    return (
      <div id="social-side">
        <Menu
          logo={logo}
          menuState={showMenu}
          menuToggle={() => this.openMenu()}
        />
        <div className="social-wrap">
          <button type="button" onClick={() => this.openMenu()}>
            <Hamburger />
          </button>
          <a href="https://www.facebook.com/ashley.roman.391082?fref=ts">
            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
          </a>
          <a href="https://twitter.com/Ashley_Manzo">
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
          <a href="https://www.instagram.com/romanashley09/">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </div>
        <div
          className={showMenu ? 'show-overlay' : 'hide-overlay'}
          onClick={() => this.openMenu()}
        />
      </div>
    );
  }
}

Social.propTypes = {
  logo: PropTypes.object,
};
