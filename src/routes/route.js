import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AppRoute = ({
  component: Component,
  layout: Layout,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated && loading) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.Account,
  };
};

export default connect(mapStateToProps)(AppRoute);
