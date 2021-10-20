import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';
import './Requisition.scss';

//Import Components
import MiniWidgets from './MiniWidgets';
// import DataTable from './DataTable';
import DataTable from './RequisitionTable';
import { Modal } from '../../../components/UiElement/index';
import RequestForm from './RequisitionForm';
import RequisitionDetails from './RequisitionDetails';
// import EarningReports from "./EarningReports";

class Requisition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      editData: null,
      modalTitle: '',
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
                  previewModal={(value) =>
                    this.previewRequestModalHandler(this, value)
                  }
                />

                {/* Requisition form Modal  */}
                <Modal
                  modal_static={openModal}
                  SetModalStatic={this.toggleModal}
                  title={modalTitle}
                >
                  {modalContent === 'editForm' ? (
                    <RequestForm editData={editData} />
                  ) : modalContent === 'addForm' ? (
                    <RequestForm editData={editData} />
                  ) : (
                    <RequisitionDetails />
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

export default Requisition;