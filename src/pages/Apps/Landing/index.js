import React, { Component, useState } from 'react';
import { Container,
  Media,
  Row,
  Col,
  Card,
  CardBody, } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

//Import Components
import Moment from 'moment';
import avatar6 from '../../../assets/images/users/admin.png';
import cake from '../../../assets/images/users/cakeBirthday.svg';
import helpDesk from '../../../assets/images/users/help-desk.png';
import birthday from '../../../assets/images/users/birthday-frame.svg';
import meeting from '../../../assets/images/users/meetingIcon.svg';
import policy from '../../../assets/images/users/policy-image(1).svg';
import webMail from '../../../assets/images/users/webmail-image.svg';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
// Redux 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    fetchRequisition,
    fetchRequisitionByDpt,
    updateRequisition,
    fetchVendor,
    createRequisition,
    fetchDepartment,
    updateStatus,
  } from '../../../store/actions';
// import {
//   fetchRequisition,
// } from '../../../store/requisition/actions';
class App_dash extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // requestParams: {
        //   // startdate: moment().format(),
        //   // endDate: moment().format(),
  
        //   startdate: '',
        //   endDate: '',
        //   departmentid: '',
        //   status: '',
        // },
        // roleIndex: 0,
        // openModal: false,
        // editData: null,
        // requestContent: null,
        // modalTitle: '',
        // previewContent: null,
        // breadcrumbItems: [
        //   { title: 'Prananet', link: '#' },
        //   { title: 'Requisition', link: '#' },
        // ],
        // pendingReport: [
        //   {
        //     icon: 'far fa-minus-circle',
        //     title: 'Pending',
        //     value: '209',
        //     rate: '2.4%',
        //     desc: 'From previous period',
        //     bg: 'secondary',
        //   },
        // ],
        // defaultValue:[
        //     {
        //         year: today.getFullYear(),
        //         month: today.getMonth()+1,
        //         day: today.getDate(),
        //     }
        // ],
        // reports: [
        //   {
        //     icon: 'far fa-calendar-check',
        //     title: 'Approved',
        //     value: '209',
        //     rate: '2.4%',
        //     desc: 'From previous period',
        //     bg: 'success',
        //   },
        //   {
        //     icon: 'far fa-calendar-minus',
        //     title: 'In-progress',
        //     value: '20',
        //     rate: '2.4%',
        //     desc: 'From previous period',
        //     bg: 'warning',
        //   },
        //   {
        //     icon: 'far fa-calendar-times',
        //     title: 'Rejected',
        //     value: '25',
        //     rate: '2.4%',
        //     desc: 'From previous period',
        //     bg: 'danger',
        //   },
        // ],
      };
      console.log();
    //   this.reportHandler = this.reportHandler.bind(this);
    //   this.toggleModal = this.toggleModal.bind(this);
    //   this.editRequestModalHandler = this.editRequestModalHandler.bind(this);
    //   this.addRequestModalHandler = this.addRequestModalHandler.bind(this);
    //   this.addCommentHandler = this.addCommentHandler.bind(this);
    //   this.previewRequestModalHandler = this.previewRequestModalHandler.bind(
    //     this
    //   );
    //   this.onChangeView = this.onChangeView.bind(this);
    //   this.summaryModalHandler = this.summaryModalHandler.bind(this);
      var today = new Date()
      const defaultValue = {
          year: today.getFullYear(),
          month: today.getMonth()+1,
          day: today.getDate(),
        };
        // const [selectedDay, setSelectedDay] = useState(defaultValue);
    }

    componentDidMount() {
        this.props.fetchDepartment();
        this.props.fetchRequisition();
      }
    //   setSelectedDay(selectedDay){
    //       this.setState((defaultValue) => ({
    //         year: today.getFullYear(),
    //         month: today.getMonth()+1,
    //         day: today.getDate(),
    //       }));
    //   }
  
    render() {
    console.log(this.props.user);
    console.log(this.props.requests?.[0]?.user?.name);
    console.log(this.props.requests);
    const user = this.props.user?.name;
        const {
          modalTitle,
          modalContent,
          reports,
          breadcrumbItems,
          openModal,
          editData,
          pendingReport,
          defaultValue
        } = this.state;
  return (
    <div className="bg-white">
      <div className="bg-warning" style={{ height: '50px' }} />

      <Container className="mt-4">
        <Row>
          <Col lg={4}>
            <Card
              className="mb-3 shadow border-0"
              style={{ background: '#FFF9C1', borderRadius: '14px' }}
            >
              <CardBody>
                <h4 className="card-title mb-3 fw-bold">User Profile</h4>
                <Media className="d-flex mt-2">
                  <img
                    className="avatar-sm me-3 rounded-circle"
                    style={{ height: '3rem', width: '3rem' }}
                    src={avatar6}
                    alt="Nazox"
                  />
                  <Media body>
                    <h5 className="mt-2 font-size-14 mb-0 mx-4" style={{textTransform: "uppercase"}}>{this.props.user?.name}</h5>
                    <p className="text-muted font-size-12 mx-4"style={{textTransform: "uppercase"}}> {this.props.user?.roles}</p>
                  </Media>
                </Media>
                {/* <Row className="text-center">
                  <Col>
                    <p className="text-muted text-truncate mb-0">Open Tasks</p>
                    <h4>6</h4>
                  </Col>
                  <Col>
                    <p className="text-muted text-truncate mb-0">Duration</p>
                    <h4>2</h4>
                  </Col>
                  <Col>
                    <p className="text-muted text-truncate mb-0">Process</p>
                    <h4>85%</h4>
                  </Col>
                </Row> */}
              </CardBody>
            </Card>
            <Card
              className="mb-3 shadow border-0"
              style={{ background: '#D6F7E7', borderRadius: '14px' }}
            >
              <CardBody>
              <a href='/app-policies'>
                <h4 className="card-title mb-3 fw-bold"> Policies</h4>
                <Row className='mb-2'>
                  <Col className="mt-2">
                    <h4 className="card-title mb-0"> NIMCO GROUP</h4>
                    <hr
                      style={{
                        background: '#ACFF78',
                        margin: '0px',
                        height: '5px',
                      }}
                    />
                    <p className="text-muted text-truncate mb-3">
                      Human Policies Manual
                    </p>
                  </Col>
                  <Col>
                    <img
                      className="avatar-sm ms-4"
                      style={{ width: '7rem', height: '8rem' }}
                      src={policy}
                      alt="Nazox"
                    />
                  </Col>
                </Row>
                <div className="mb-5">
                  <h6 className="card-title mb-1"> Our Vision</h6>
                  <p className="text-muted">
                    To Become a Global Brand in all our chosen line of Business
                    in Construction, Dredging, Piling, IT, Logistics and
                    Security, while delivering projects and services that
                    consistently meet client satisfaction and international
                    standard.
                  </p>
                </div>
                <div>
                  <h6 className="card-title mb-1"> Our Mission</h6>
                  <p className="text-muted">
                    To be a Value adding client to our numerous customers using
                    modern technology with a well-motivated workforce to impact
                    both our immediate environment and that of our customers.
                  </p>
                </div>
                </a>
              </CardBody>
            </Card>
          </Col>

          {/* Second Section */}
          <Col lg={4}>
            <Card
              className="mb-3 shadow border-0"
              style={{ background: '#E2EFFF', borderRadius: '14px' }}
            >
              <CardBody>
                <h4 className="card-title mb-3 fw-bold">Annnoucement</h4>
                <Media className="d-flex mt-2">
                  <img
                    className="avatar-sm me-2 mt-2"
                    style={{ height: '3rem', width: '3rem' }}
                    src={cake}
                    alt="Nazox"
                  />
                  <Media body>
                    <p className="text-muted font-size-12 mb-0">
                      {' '}
                      Thursday, 14th January 2022.{' '}
                    </p>
                    <h6 className="card-title mb-0">
                      Office Management Meeting
                    </h6>
                    <p className="text-muted text-truncate font-size-12 mb-0">
                      {' '}
                      There is going to be a meeting held
                    </p>
                  </Media>
                </Media>
                <Media className="d-flex mt-2">
                  <img
                    className="avatar-sm me-2 mt-2"
                    style={{ height: '3rem', width: '3rem' }}
                    src={meeting}
                    alt="Nazox"
                  />
                  <Media body>
                    <p className="text-muted font-size-12 mb-0">
                      {' '}
                      Thursday, 14th January 2022.{' '}
                    </p>
                    <h6 className="card-title mb-0">
                      Office Management Meeting
                    </h6>
                    <p className="text-muted text-truncate font-size-12 mb-0">
                      {' '}
                      There is going to be a meeting held
                    </p>
                  </Media>
                </Media>
                <Media className="d-flex mt-2">
                  <img
                    className="avatar-sm me-2 mt-2"
                    style={{ height: '3rem', width: '3rem' }}
                    src={cake}
                    alt="Nazox"
                  />
                  <Media body>
                    <p className="text-muted font-size-12 mb-0">
                      {' '}
                      Thursday, 14th January 2022.{' '}
                    </p>
                    <h6 className="card-title mb-0">
                      Office Management Meeting
                    </h6>
                    <p className="text-muted text-truncate font-size-12 mb-0">
                      {' '}
                      There is going to be a meeting held
                    </p>
                  </Media>
                </Media>
                <Media className="d-flex mt-2">
                  <img
                    className="avatar-sm me-2 mt-2"
                    style={{ height: '3rem', width: '3rem' }}
                    src={meeting}
                    alt="Nazox"
                  />
                  <Media body>
                    <p className="text-muted font-size-12 mb-0">
                      {' '}
                      Thursday, 14th January 2022.{' '}
                    </p>
                    <h6 className="card-title mb-0">
                      Office Management Meeting
                    </h6>
                    <p className="text-muted text-truncate font-size-12 mb-0">
                      {' '}
                      There is going to be a meeting held
                    </p>
                  </Media>
                </Media>
              </CardBody>
            </Card>
            <Card
              className="mb-3 shadow border-0"
              style={{ background: '#E3DCFF', borderRadius: '14px' }}
            >
              <CardBody >
              <a href='/app-requisition'>
                <h4 className="card-title mb-3 fw-bold">Requisition</h4>
                {
                    this.props.requests?.length != 0
                    ? 
                   <> <div className="mb-2">
                  
                  <span
                    className="badge text-success rounded-pill float-end"
                    style={{ background: '#DEFFD8' }}
                  >
                    Approved
                  </span>
                  <div>
                    <h6 className="card-title mb-0">{this.props.requests?.[0]?.itemName}</h6>
                    <p className="text-muted text-truncate font-size-12 mb-0">
                    {Moment(this.props.requests?.[0]?.createdAt).format('l')}
                    </p>
                  </div>
                </div>
                <div>
                  <span
                    className="badge text-warning rounded-pill float-end"
                    style={{ background: '#FFE2CC' }}
                  >
                    Pending
                  </span>
                  <div>
                    <h6 className="card-title mb-0">{this.props.requests?.[1]?.itemName}</h6>
                    <p className="text-muted text-truncate font-size-12 mb-0">
                    {Moment(this.props.requests?.[1]?.createdAt).format('l')}
                    </p>
                  </div>
                </div>
                </>
                    : 'No requisition yet'
                }
                
                </a>
              </CardBody>
            </Card>
            <Card
              className="mb-3 shadow border-0"
              style={{ background: '#FFE7CB', borderRadius: '14px' }}
            >
              <CardBody>
                  <a href='https://webmail.nimcogroup.com.ng/'>
                  <h4 className="card-title mb-3 fw-bold">Webmail</h4>
                <Media className="d-flex mt-2">
                  <Media body>
                    <p className="text-muted font-size-12 mb-0 w-75">
                      Have you checked your mail today!
                    </p>
                  </Media>
                  <div className="text-center ms-3">
                    <img
                      className="avatar-sm "
                      style={{ height: '4rem', width: '5rem' }}
                      src={webMail}
                      alt="Nazox"
                    />
                  </div>
                </Media>      
                  </a>
                
              </CardBody>
            </Card>
          </Col>

          {/* Third Section */}
          <Col lg={4}>
            <Card
              className="mb-3 shadow border-0"
              style={{ background: '#F5DAFF', borderRadius: '14px' }}
            >
              <CardBody>
                <div className="text-center mb-2">
                  <img
                    className="avatar-lg "
                    style={{ width: '100%', height: '5.5rem' }}
                    src={birthday}
                    alt="Nazox"
                  />
                </div>
                <div>
                  <Calendar
                    value={defaultValue}
                    onChange={defaultValue}
                    colorPrimary="#ffc107" // added this
                    calendarClassName="custom-calendar w-100 h-50 bg-transparent" // and this
                    calendarTodayClassName="custom-today-day" // also this
                    shouldHighlightWeekends
                  />
                </div>
              </CardBody>
            </Card>
            <Card
              className="mb-3 shadow border-0"
              style={{ background: '#ACACAC', borderRadius: '14px' }}
            >
              <CardBody>
                <h4 className="card-title mb-3 fw-bold">HelpDesk</h4>
                <div className="text-center">
                  <img
                    className="avatar-lg "
                    style={{ width: '8rem', height: '6rem' }}
                    src={helpDesk}
                    alt="Nazox"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
};
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
    })(App_dash)
  );