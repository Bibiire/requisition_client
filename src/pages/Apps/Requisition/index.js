import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import { Alert } from '../../../components/Common/index';
import './Requisition.scss';

//Import Components
import MiniWidgets from './MiniWidgets';
import DataTable from './RequisitionTable';
import { Modal } from '../../../components/UiElement/index';
import RequestForm from './RequisitionForm';
import RequisitionDetails from './RequisitionDetails';

// Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// action
import {
  fetchRequisition,
  fetchRequisitionByDpt,
  updateRequisition,
  fetchVendor,
  createRequisition,
  fetchDepartment,
} from '../../../store/actions';
class Requisition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      editData: null,
      modalTitle: '',
      previewContent: null,
      breadcrumbItems: [
        { title: 'Prananet', link: '#' },
        { title: 'Requisition', link: '#' },
      ],
      reports: [
        {
          icon: 'far fa-calendar-check',
          title: 'Approved',
          value: '209',
          rate: '2.4%',
          desc: 'From previous period',
          bg: 'success',
        },
        {
          icon: 'far fa-calendar-minus',
          title: 'In-progress',
          value: '20',
          rate: '2.4%',
          desc: 'From previous period',
          bg: 'warning',
        },
        {
          icon: 'far fa-calendar-times',
          title: 'Rejected',
          value: '25',
          rate: '2.4%',
          desc: 'From previous period',
          bg: 'danger',
        },
      ],
    };
    this.reportHandler = this.reportHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.AddRequisition = this.AddRequisition.bind(this);
    this.editRequestModalHandler = this.editRequestModalHandler.bind(this);
    this.addRequestModalHandler = this.addRequestModalHandler.bind(this);
    this.previewRequestModalHandler = this.previewRequestModalHandler.bind(
      this
    );
  }

  reportHandler() {
    alert('report');
  }

  toggleModal() {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
    }));
  }

  editRequestModalHandler(e, value) {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
      editData: value,
      modalTitle: 'Edit Request',
      modalContent: 'editForm',
    }));
  }

  previewRequestModalHandler(e, value) {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
      modalTitle: 'Request Details',
      modalContent: 'previewForm',
      previewContent: value,
    }));
  }

  addRequestModalHandler() {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
      modalTitle: 'Add Request',
      modalContent: 'addForm',
      editData: null,
    }));
  }

  AddRequisition() {
    return (
      <Col md={3}>
        <Card
          style={{ height: '147px' }}
          className="d-flex align-items-center justify-content-around add-form-card"
          onClick={this.addRequestModalHandler}
        >
          <i className="fas fa-plus add-form-icon" />
        </Card>
      </Col>
    );
  }

  componentDidMount() {
    this.props.fetchRequisition();
    this.props.fetchVendor();
    this.props.fetchDepartment();
  }

  render() {
    const {
      modalTitle,
      modalContent,
      reports,
      breadcrumbItems,
      openModal,
      editData,
    } = this.state;

    return (
      <React.Fragment>
        {this.props.successMsg && <Alert />}
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Requisition"
              breadcrumbItems={breadcrumbItems}
            />
            <Row>
              <Col xl={12}>
                <Row>
                  <this.AddRequisition />
                  <MiniWidgets reports={reports} onClick={this.reportHandler} />
                </Row>

                {/* Requisition Table */}
                <DataTable
                  editModal={(value) =>
                    this.editRequestModalHandler(this, value)
                  }
                  requestData={this.props.requests}
                  loading={this.props.loading}
                  previewModal={(value) =>
                    this.previewRequestModalHandler(this, value)
                  }
                  updateRequestHandler={this.props.updateRequisition}
                  departments={this.props.departments}
                  requisitionFilterHandle={this.props.fetchRequisitionByDpt}
                />

                {/* Requisition form Modal  */}
                <Modal
                  modal_static={openModal}
                  SetModalStatic={this.toggleModal}
                  title={modalTitle}
                >
                  {modalContent === 'editForm' ? (
                    <RequestForm
                      vendors={this.props.vendors}
                      editData={editData}
                    />
                  ) : modalContent === 'addForm' ? (
                    <RequestForm
                      vendors={this.props.vendors}
                      editData={editData}
                      createRequest={this.props.createRequisition}
                      closeModal={this.toggleModal}
                    />
                  ) : (
                    <RequisitionDetails
                      previewContentId={this.state.previewContent}
                    />
                  )}
                </Modal>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { requests, loading, successMsg } = state.Requisition;
  const { vendors } = state.Vendor;
  const { departments } = state.Department;
  return { requests, vendors, departments, loading, successMsg };
};

export default withRouter(
  connect(mapStatetoProps, {
    fetchRequisition,
    fetchVendor,
    fetchRequisitionByDpt,
    updateRequisition,
    fetchDepartment,
    createRequisition,
  })(Requisition)
);
