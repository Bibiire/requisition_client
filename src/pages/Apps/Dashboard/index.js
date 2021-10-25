import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

//Import Components
import MiniWidgets from './MiniWidgets';
import RevenueAnalytics from './RevenueAnalytics';
import DepartmentalAnalysis from '../../../components/Common/PieChartCard';
import EarningReports from './ReportSummary';
// import Sources from "./Sources";
// import RecentlyActivity from "./RecentlyActivity";
// import RevenueByLocations from "./RevenueByLocations";
// import ChatBox from "./ChatBox";
// import LatestTransactions from "./LatestTransactions";

const data = {
  series: [42, 26, 15],
  options: {
    labels: ['Product A', 'Product B', 'Product C'],
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
    colors: ['#5664d2', '#1cbb8c', '#eeb902'],
  },
  title: 'Departmental Summary',
  department: ['Ostia', 'Nimco', 'Prananet'],
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Prananet', link: '#' },
        { title: 'Dashboard', link: '#' },
      ],
      reports: [
        {
          icon: 'ri-stack-line',
          title: 'Requisitions',
          value: '209',
          rate: '2.4%',
          desc: 'From previous period',
        },
        {
          icon: 'ri-store-2-line',
          title: 'Vendors',
          value: '20',
          rate: '2.4%',
          desc: 'From previous period',
        },
        {
          icon: 'ri-briefcase-4-line',
          title: 'Users',
          value: '25',
          rate: '2.4%',
          desc: 'From previous period',
        },
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
                  <MiniWidgets reports={this.state.reports} />
                </Row>

                {/* revenue Analytics */}
                <RevenueAnalytics />
              </Col>

              <Col xl={4}>
                {/* sales Analytics */}
                <DepartmentalAnalysis data={data} />

                {/* earning reports */}
                <EarningReports />
              </Col>
            </Row>

            <Row>
              {/* sources */}
              {/* <Sources/> */}

              {/* recent activity */}
              {/* <RecentlyActivity/> */}

              {/* revenue by locations */}
              {/* <RevenueByLocations/> */}
            </Row>

            <Row>
              {/* chat box */}
              {/* <ChatBox/> */}

              {/* latest transactions */}
              {/* <LatestTransactions/> */}
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
