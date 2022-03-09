import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AppRoutePublic = ({
  component: Component,
  layout: Layout,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  console.log(isAuthenticated);
  console.log(loading);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && !loading ? (
          <Redirect
            to={{ pathname: '/app-dash', state: { from: props.location } }}
          />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.Account,
  };
};

export default connect(mapStateToProps)(AppRoutePublic);
