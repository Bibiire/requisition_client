import React, { Component } from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import {
  hideRightSidebar,
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
} from '../../store/actions';

//SimpleBar
import SimpleBar from 'simplebar-react';

import { Link } from 'react-router-dom';

import './rightbar.scss';

import HepDeskForm from '../../pages/Apps/HelpDesk/HepDeskForm';
//Import images
import layout1 from '../../assets/images/layouts/layout-1.jpg';
import layout2 from '../../assets/images/layouts/layout-2.jpg';
import layout3 from '../../assets/images/layouts/layout-3.jpg';

class RightSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutType: this.props.layoutType,
      sidebarType: this.props.leftSideBarType,
      layoutWidth: this.props.layoutWidth,
      sidebarTheme: this.props.leftSideBarTheme,
      topbarTheme: this.props.topbarTheme,
    };
    this.hideRightbar = this.hideRightbar.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
    this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
    this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this);
    this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this);
    this.changeTopbarTheme = this.changeTopbarTheme.bind(this);
    this.changeThemePreloader = this.changeThemePreloader.bind(this);
  }

  /**
   * Hides the right sidebar
   */
  hideRightbar(e) {
    e.preventDefault();
    this.props.hideRightSidebar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        sidebarType: this.props.leftSideBarType,
        layoutWidth: this.props.layoutWidth,
        sidebarTheme: this.props.leftSideBarTheme,
        topbarTheme: this.props.topbarTheme,
      });
    }
  }

  changeThemePreloader = () => {
    this.props.changePreloader(!this.props.isPreloader);
  };
  /**
   * Change the layout
   * @param {*} e
   */
  changeLayout(e) {
    if (e.target.checked) {
      this.props.changeLayout(e.target.value);
    }
  }

  /**
   * Changes layout width
   * @param {*} e
   */
  changeLayoutWidth(e) {
    if (e.target.checked) {
      this.props.changeLayoutWidth(e.target.value);
    }
  }

  // change left sidebar design
  changeLeftSidebarType(e) {
    if (e.target.checked) {
      this.props.changeSidebarType(e.target.value);
    }
  }

  // change left sidebar theme
  changeLeftSidebarTheme(e) {
    if (e.target.checked) {
      this.props.changeSidebarTheme(e.target.value);
    }
  }

  // change topbar theme
  changeTopbarTheme(e) {
    if (e.target.checked) {
      this.props.changeTopbarTheme(e.target.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar">
          <SimpleBar style={{ height: '900px' }}>
            <div data-simplebar className="h-100">
              <div className="rightbar-title px-3 py-4">
                <Link
                  to="#"
                  onClick={this.hideRightbar}
                  className="right-bar-toggle float-right"
                >
                  <i className="mdi mdi-close noti-icon"></i>
                </Link>
                <h5 className="m-0">Help Form</h5>
              </div>

              <hr className="my-0" />
              <div className="p-4">
                <HepDeskForm />
              </div>
            </div>
          </SimpleBar>
        </div>
        <div className="rightbar-overlay"></div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default connect(mapStatetoProps, {
  hideRightSidebar,
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader,
})(RightSidebar);
