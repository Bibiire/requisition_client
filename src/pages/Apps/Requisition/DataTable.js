import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Row, Col, Card, CardBody, Container } from 'reactstrap';

//Import Breadcrumb
import data from './data';
// import './datatables.scss';

class DatatableTables extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <MDBDataTable responsive exportToCSV bordered data={data} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DatatableTables;
