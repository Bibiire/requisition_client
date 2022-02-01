import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import { Alert, Notification } from '../../../components/Common/index';
import './Requisition.scss';

//Import Components
import MiniWidgets from './MiniWidgets';
import DataTable from './RequisitionTable';
import { Modal } from '../../../components/UiElement/index';
import RequestForm from './RequisitionForm';
import RequisitionDetails from './RequisitionDetails';
import CommentForm from './CommentForm';
import { RequisitionSummary } from './components/index';

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
  updateStatus,
} from '../../../store/actions';

class Requisition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestParams: {
        // startdate: moment().format(),
        // endDate: moment().format(),

        startdate: '',
        endDate: '',
        departmentid: '',
        status: '',
      },
      roleIndex: 0,
      openModal: false,
      editData: null,
      requestContent: null,
      modalTitle: '',
      previewContent: null,
      breadcrumbItems: [
        { title: 'Prananet', link: '#' },
        { title: 'Requisition', link: '#' },
      ],
      pendingReport: [
        {
          icon: 'far fa-minus-circle',
          title: 'Pending',
          value: '209',
          rate: '2.4%',
          desc: 'From previous period',
          bg: 'secondary',
        },
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
    this.editRequestModalHandler = this.editRequestModalHandler.bind(this);
    this.addRequestModalHandler = this.addRequestModalHandler.bind(this);
    this.addCommentHandler = this.addCommentHandler.bind(this);
    this.previewRequestModalHandler = this.previewRequestModalHandler.bind(
      this
    );
    this.onChangeView = this.onChangeView.bind(this);
    this.summaryModalHandler = this.summaryModalHandler.bind(this);
  }

  reportHandler() {
    alert('report');
  }

  onChangeView(role) {
    let roleValue = 0;
    if (role === 'authorizer' || role === 'acc_checker') {
      roleValue = 1;
    }
    this.props.fetchRequisition({ role });
    this.setState({
      ...this.state,
      roleIndex: roleValue,
    });
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

  summaryModalHandler(e, value) {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
      // editData: value,
      modalTitle: 'Request Departmental Summary',
      modalContent: 'requestSummary',
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

  addRequestModalHandler(value) {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
      modalTitle: 'Add Request',
      modalContent: 'addForm',
      editData: null,
    }));
  }

  addCommentHandler(requestValue) {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
      modalTitle: 'Add Comment',
      modalContent: 'addComment',
      requestContent: requestValue,
      editData: null,
    }));
  }

  componentDidMount() {
    this.props.fetchDepartment();
    this.props.fetchRequisition();
  }

  render() {
    const {
      modalTitle,
      modalContent,
      reports,
      breadcrumbItems,
      openModal,
      editData,
      pendingReport,
    } = this.state;
    return (
      <React.Fragment>
        {this.props.successMsg === true && (
          <Notification title={this.props.successMsg} />
        )}
        <div className="page-content">
          <Notification />
          <Container fluid>
            <Breadcrumbs
              onChange={(value) => this.onChangeView(value)}
              roles={this.props.user.roles.length > 1 && this.props.user.roles}
              title="Requisition"
              breadcrumbItems={breadcrumbItems}
            />
            <Row>
              <Col xl={12}>
                <Row>
                  {this.props.user?.roles[0] === 'user' ? (
                    <Col md={3}>
                      <Card
                        style={{ height: '147px' }}
                        className="d-flex align-items-center justify-content-around add-form-card"
                        onClick={this.addRequestModalHandler}
                      >
                        <i className="fas fa-plus add-form-icon" />
                      </Card>
                    </Col>
                  ) : (
                    <MiniWidgets
                      reports={pendingReport}
                      onClick={this.reportHandler}
                    />
                  )}
                  <MiniWidgets reports={reports} onClick={this.reportHandler} />
                </Row>

                {/* Requisition Table */}
                <DataTable
                  user={this.props.user.roles[this.state.roleIndex]}
                  editModal={(value) =>
                    this.editRequestModalHandler(this, value)
                  }
                  summaryPreview={this.summaryModalHandler}
                  requestData={this.props.requests}
                  loading={this.props.loading}
                  previewModal={(value) =>
                    this.previewRequestModalHandler(this, value)
                  }
                  updateStatus={this.props.updateStatus}
                  departments={this.props.departments}
                  requisitionFilterHandle={this.fetchRequisitionHandler}
                  onChangeRequest={this.props.fetchRequisition}
                  addCommentHandler={this.addCommentHandler}
                />

                {/* Requisition form Modal  */}
                <Modal
                  modal_static={openModal}
                  SetModalStatic={this.toggleModal}
                  title={modalTitle}
                >
                  {modalContent === 'editForm' ? (
                    <RequestForm
                      updateRequest={this.props.updateRequisition}
                      editData={editData}
                      closeModal={this.toggleModal}
                    />
                  ) : modalContent === 'addForm' ? (
                    <RequestForm
                      createRequest={this.props.createRequisition}
                      closeModal={this.toggleModal}
                    />
                  ) : modalContent === 'requestSummary' ? (
                    <RequisitionSummary data={this.props.requests} />
                  ) : modalContent === 'addComment' ? (
                    <CommentForm
                      updateRequest={this.props.updateRequisition}
                      requestContent={this.state.requestContent}
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
  const { user } = state.Account;
  return { user, requests, vendors, departments, loading, successMsg };
};

export default withRouter(
  connect(mapStatetoProps, {
    fetchRequisition,
    fetchVendor,
    fetchRequisitionByDpt,
    updateRequisition,
    fetchDepartment,
    createRequisition,
    updateStatus,
  })(Requisition)
);
