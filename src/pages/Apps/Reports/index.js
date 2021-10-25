import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

//Import Breadcrumb
import {
  Breadcrumb,
  PieChartCard as TaskAnalysis,
} from '../../../components/Common/index';
// import './Requisition.scss';

//Import Components
import { MiniWidgets } from './widgets/index';
// import DataTable from './DataTable';
import { ProjectsTable } from './Tables/index';
import { Modal } from '../../../components/UiElement/index';
// import RequestForm from './RequisitionForm';
// import RequisitionDetails from './RequisitionDetails';

const data = {
  series: [42, 26, 15],
  options: {
    labels: ['Pending', 'Completed', 'On-Going'],
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ['#FF3C60', '#1cbb8c', '#eeb902'],
  },
  title: 'Task Summary',
  department: ['Pending', 'Completed', 'On-Going'],
};

class Requisition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      editData: null,
      modalTitle: '',
      breadcrumbItems: [
        { title: 'Prananet', link: '#' },
        { title: 'Report', link: '#' },
      ],
      reports: [
        {
          icon: 'far fa-calendar-check',
          title: 'Total Projects',
          value: '5',
          rate: '2.4%',
          desc: 'From previous period',
          bg: 'success',
        },
        {
          icon: 'far fa-calendar-minus',
          title: 'Total Task',
          value: '200',
          rate: '2.4%',
          desc: 'From previous period',
          bg: 'warning',
        },
        {
          icon: 'far fa-calendar-times',
          title: 'Others',
          value: '25',
          rate: '2.4%',
          desc: 'From previous period',
          bg: 'danger',
        },
      ],
    };
    this.reportHandler = this.reportHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.AddProject = this.AddProject.bind(this);
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

  AddProject() {
    return (
      <Col md={3}>
        <Card
          style={{ height: '94px' }}
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
            <Breadcrumb title="Requisition" breadcrumbItems={breadcrumbItems} />
            <Row>
              <Col xl={8}>
                <Row>
                  <this.AddProject />
                  <MiniWidgets reports={reports} onClick={this.reportHandler} />
                </Row>

                {/* Requisition Table */}
                <ProjectsTable
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
                  {/* {modalContent === 'editForm' ? (
                    <RequestForm editData={editData} />
                  ) : modalContent === 'addForm' ? (
                    <RequestForm editData={editData} />
                  ) : (
                    <RequisitionDetails />
                  )} */}
                </Modal>
              </Col>

              <Col xl={4}>
                <TaskAnalysis data={data} />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Requisition;
