import React, { Component } from 'react';
import { Button, Card, CardBody, Row, Col, Table } from 'reactstrap';
import { groupArrObj } from '../../../../utils/utilities';
import { Link } from 'react-router-dom';
import { RequisitionAccordions } from '../components/index';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // requestSummary: [],
      requestSummary: [],
      // data: null,
      doneLoading: false,
      total: 0,
      discount: 0,
      subTotal: 0,
    };
    this.sumArray = this.sumArray.bind(this);
    this.groupArr = this.groupArr.bind(this);
    this.sumAccount = this.sumAccount.bind(this);
    this.viewMoreHandler = this.viewMoreHandler.bind(this);
  }

  componentDidMount() {
    this.groupArr();
    const discount = this.sumArray('discount');
    const total = this.sumArray('total');
    this.setState({
      ...this.state,
      total: total,
      discount: discount,
      doneLoading: true,
    });
  }

  groupArr() {
    const requestStructure = groupArrObj(this.props.data, 'name');
    this.setState({
      ...this.state,
      data: requestStructure,
    });
  }

  sumArray(field) {
    let result = this.state.requestSummary
      .map((item) => item[field])
      .reduce((prev, next) => prev + next, 0);
    return result;
  }

  sumAccount(data, field) {
    let result = 0;
    data.forEach((element) => {
      result = result + element[field];
    });
    return result;
  }

  viewMoreHandler(id) {
    this.setState({
      ...this.state,
      showMore: id,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h3 className="mb-4">Nimco Group Requisition Summary</h3>
                  {this.state.doneLoading && this.state.data && (
                    <RequisitionAccordions reviewData={this.state.data} />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
