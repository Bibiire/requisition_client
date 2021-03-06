import React, { Component } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

// Import Routes
import { authProtectedRoutes, publicRoutes } from './routes/';
import AppRoute from './routes/route';
import AppRoutePublic from './routes/routePublic';

// layouts
import VerticalLayout from './components/VerticalLayout/';
import HorizontalLayout from './components/HorizontalLayout/';
import NonAuthLayout from './components/NonAuthLayout';

// Import scss
import './theme.scss';

//Firebase helper
import { loadUser } from './store/auth/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getLayout = this.getLayout.bind(this);
  }

  componentDidMount() {
    this.props.loadUser();
  }

  /**
   * Returns the layout
   */
  getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (this.props.layout.layoutType) {
      case 'horizontal':
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  render() {
    const Layout = this.getLayout();
    console.log(this.props.auth);
    return (
      <React.Fragment>
        {this.props.auth.isAuthenticated !==
          null && (
            <Router>
              <Switch>
                {publicRoutes.map((route, idx) => (
                  <AppRoutePublic
                    path={route.path}
                    layout={NonAuthLayout}
                    component={route.component}
                    key={idx}
                  />
                ))}

                {authProtectedRoutes.map((route, idx) => (
                  <AppRoute
                    path={route.path}
                    layout={Layout}
                    component={route.component}
                    key={idx}
                  />
                ))}
              </Switch>
            </Router>
          )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
    auth: state.Account,
  };
};

export default connect(mapStateToProps, { loadUser })(App);
