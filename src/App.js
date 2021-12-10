import React, { Component } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

// Import Routes
import { authProtectedRoutes, publicRoutes } from './routes/';
import AppRoute from './routes/route';

// layouts
import VerticalLayout from './components/VerticalLayout/';
import HorizontalLayout from './components/HorizontalLayout/';
import NonAuthLayout from './components/NonAuthLayout';

// Import scss
import './theme.scss';

//Firebase helper
import { loadUser } from './store/auth/register/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getLayout = this.getLayout.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem(process.env.REACT_APP_USERSTORAGE)) {
      this.props.loadUser();
    }
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

    return (
      <React.Fragment>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AppRoute
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
