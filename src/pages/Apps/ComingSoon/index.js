import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Logo
import logodark from '../../../assets/images/logo-dark.png';
import bg from '../../../assets/images/maintenance-bg.png';

class Maintenance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Utility', link: '#' },
        { title: 'Dashboard', link: '#' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="mdi mdi-home-variant h2"></i>
          </Link>
        </div>

        <div className="my-5 pt-sm-5">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="text-center">
                  <div className="mb-5">
                    <Link to="/">
                      <img src={logodark} alt="logo" height="20" />
                    </Link>
                  </div>

                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="maintenance-img">
                        <img
                          src={bg}
                          alt=""
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </Col>
                  </Row>
                  <h3 className="mt-5">Site is Under Maintenance</h3>
                  <p>Please check back in sometime.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Maintenance;
