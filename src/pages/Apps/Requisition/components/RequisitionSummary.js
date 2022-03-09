import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { RequisitionAccordions } from '../components/index';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
    // this.sumArray = this.sumArray.bind(this);
  }
  
  componentDidMount() {
    // filter the approve request
    const newData = this.props.data.filter(
      (data) => data.approve?.status === true
    );
    console.log(newData);
    const result = newData.reduce(function (r, a) {
      r[a.departmentalId.name] = r[a.departmentalId.name] || [];
      r[a.departmentalId.name].push(a);
      return r;
    }, Object.create(null));
    this.setState(() => ({
      ...this.state,
      data: result,
      isLoading: false,
    }));
  }

  render() {
    console.log(this.props.data);
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h3 className="mb-4">Nimco Group Requisition Summary</h3>
                  {!this.state.isLoading && this.state.data && (
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
