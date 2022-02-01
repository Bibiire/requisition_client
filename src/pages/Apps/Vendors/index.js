import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import { Modal } from '../../../components/UiElement/index';
import { fetchVendor, createVendor, updateVendor } from '../../../store/vendors/actions';
import { connect } from 'react-redux';

// Component
import VendorTable from './vendorTable';
import VendorForm from './vendorForm';

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Prananet', link: '#' },
        { title: 'Vendor', link: '#' },
      ],
      openModal: false,
      modalTitle: 'Create Vendor',
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
    }));
  }

  componentDidMount() {
    this.props.fetchVendor();
  }

  render() {
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
                          // onChange={onChangeHandler}
                          className="custom-select custom-select-sm mr-2"
                        >
                          <option value="all">All Vendors</option>
                          <option value="active">Active</option>
                          <option value="pending">De-active</option>
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
                          Vendors{' '}
                          <Badge color="success" className="mr-1">
                            204
                          </Badge>
                        </h4>
                      </div>
                    </div>
                    <VendorTable
                      isLoading={this.props.loading}
                      data={this.props.vendors}
                      updateVendor={this.props.updateVendor}
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
              <VendorForm createVendor={this.props.createVendor} />
            </Modal>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { vendors, loading } = state.Vendor;
  return { vendors, loading };
};
export default connect(mapStateToProps, { fetchVendor, createVendor, updateVendor })(Vendor);
