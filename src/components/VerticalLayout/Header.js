import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import { Link } from 'react-router-dom';

// Import menuDropdown
import LanguageDropdown from '../CommonForBoth/TopbarDropdown/LanguageDropdown';
import NotificationDropdown from '../CommonForBoth/TopbarDropdown/NotificationDropdown';
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu';

//Import i18n
import { withNamespaces } from 'react-i18next';

//Import Megamenu
import MegaMenu from './MegaMenu';

// Redux Store
import { toggleRightSidebar, logoutUser } from '../../store/actions';

//Import logo Images
import logosmdark from '../../assets/images/logo-sm-dark.png';
import logodark from '../../assets/images/logo-dark.png';
import logosmlight from '../../assets/images/logo-sm-light.png';
import logolight from '../../assets/images/logo-dark.png';

//Import Social Profile Images
import github from '../../assets/images/brands/github.png';
import bitbucket from '../../assets/images/brands/bitbucket.png';
import dribbble from '../../assets/images/brands/dribbble.png';
import dropbox from '../../assets/images/brands/dropbox.png';
import mail_chimp from '../../assets/images/brands/mail_chimp.png';
import slack from '../../assets/images/brands/slack.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isSocialPf: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box bg-warning">
                <Link to="#" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logosmdark} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logodark} alt="" height="20" />
                  </span>
                </Link>

                <Link to="#" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logosmlight} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logolight} alt="" height="20" />
                  </span>
                </Link>
              </div>

              <Button
                size="sm"
                color="none"
                type="button"
                onClick={this.toggleMenu}
                className="px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
              >
                <i className="ri-menu-2-line align-middle"></i>
              </Button>

              {/* Request is here */}
              <div className="dropdown d-inline-block">
                <Button
                  color="none"
                  onClick={this.toggleRightbar}
                  size="sm"
                  type="button"
                  className="header-item noti-icon right-bar-toggle waves-effect bg-light"
                >
                  <i
                    className="dripicons-plus"
                    style={{
                      lineHeight: '1.40625rem',
                      verticalAlign: 'middle',
                    }}
                  />{' '}
                  <span className='mr-1 font-weight-bold'> {this.props.t('Help Desk')} </span>
                </Button>
              </div>
            </div>

            <div className="d-flex">
              <Dropdown
                isOpen={this.state.isSocialPf}
                toggle={() =>
                  this.setState({ isSocialPf: !this.state.isSocialPf })
                }
                className="d-none d-lg-inline-block ml-1"
              >
                <DropdownToggle
                  tag="button"
                  className="btn header-item noti-icon waves-effect"
                >
                  <i className="ri-apps-2-line"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg" right>
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={github} alt="Github" />
                          <span>{this.props.t('Deparmental')}</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={bitbucket} alt="bitbucket" />
                          <span>{this.props.t('Help Desk')}</span>
                        </Link>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dropbox} alt="dropbox" />
                          <span>{this.props.t('Vendors')}</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={mail_chimp} alt="mail_chimp" />
                          <span>{this.props.t('Users')}</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  color="none"
                  type="button"
                  className="header-item noti-icon waves-effect"
                  onClick={this.toggleFullscreen}
                >
                  <i className="ri-fullscreen-line"></i>
                </Button>
              </div>

              <NotificationDropdown />

              <ProfileMenu userInfo={this.props.user} logoutHandler={this.props.logoutUser}/>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { layoutType } = state.Layout;
  const { user } = state.Account;
  return { layoutType, user };
};

export default connect(mapStatetoProps, { toggleRightSidebar, logoutUser })(
  withNamespaces()(Header)
);
