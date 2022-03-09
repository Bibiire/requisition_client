import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import { Modal } from '../../../components/UiElement/index';
import {
  fetchUser,
  createUser,
  updateUser,
} from '../../../store/users/actions';
import {
  fetchDepartment,
} from '../../../store/actions';
import { connect } from 'react-redux';

// Component
import UserTable from './userTable';
import UserForm from './userForm';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Prananet', link: '#' },
        { title: 'User', link: '#' },
      ],
      openModal: false,
      modalTitle: 'Create User',
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
    }));
  }
  
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchDepartment();
  }

  onChangeHandler(e) {
    if (e.target.value === '') {
      this.props.fetchUser();
    } else {
      const filter = {
        status: e.target.value,
      };
      this.props.fetchUser(filter);
    }
  }
  
  render() {
    console.log(this.props.users);
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Dashboard"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div>
                      <div className="float-right d-flex">
                        <select
                          onChange={this.onChangeHandler}
                          className="custom-select custom-select-sm mr-2"
                        >
                          <option value="">All Users</option>
                          <option value={true}>Active</option>
                          <option value={false}>De-active</option>
                        </select>
                        <span
                          className="btn btn-light btn-sm ml-2"
                          onClick={() => this.toggleModal()}
                        >
                          <i className=" fas fa-plus font-size-15 " />
                        </span>
                      </div>
                      <div className="d-flex">
                        <h4 className="card-title mb-4">
                          Users{' '}
                          <Badge color="success" className="mr-1">
                            {this.props.users !== null &&
                              this.props.users.length}
                          </Badge>
                        </h4>
                      </div>
                    </div>
                    <UserTable
                      isLoading={this.props.loading}
                      data={this.props.users}
                      updateUser={this.props.updateUser}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Modal
              modal_static={this.state.openModal}
              SetModalStatic={this.toggleModal}
              title={this.state.modalTitle}
            >
              <UserForm createUser={this.props.createUser} departments={this.props.departments} />
            </Modal>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { users, loading } = state.User;
  const { departments } = state.Department;
  return { users, departments, loading };
};
export default connect(mapStateToProps, {
  fetchUser,
  createUser,
  updateUser,
  fetchDepartment
})(Users);
