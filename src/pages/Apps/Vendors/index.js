import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

//Import Components
// import MiniWidgets from "./MiniWidgets";
// import RevenueAnalytics from './RevenueAnalytics';
// import SalesAnalytics from "./SalesAnalytics";
// import EarningReports from "./EarningReports";

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Prananet', link: '#' },
        { title: 'Vendor', link: '#' },
      ],
    };
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
              <Col xl={8}>
                <Row>
                  {/* <MiniWidgets reports={this.state.reports} /> */}
                  Vendor Page
                </Row>

                {/* revenue Analytics */}
                {/* <RevenueAnalytics /> */}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Vendor;
