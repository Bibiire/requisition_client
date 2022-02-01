import React, { Component } from 'react';
import { UncontrolledTooltip, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { MDBDataTable } from 'mdbreact';
import '../../../assets/scss/datatables.scss';

class VendorTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleTab = this.toggleTab.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  updateHandler(value, state) {
    const newVendor = {
      ...value,
      status: state,
    };
    this.props.updateVendor(newVendor);
  }

  componentDidMount() {
    document
      .getElementsByClassName('pagination')[0]
      .classList.add('pagination-rounded');
  }

  render() {
    let data;
    if (this.props.data !== null && !this.props.loading) {
      data = {
        columns: [
          {
            label: 'Vendor Name',
            field: 'name',
            sort: 'asc',
            width: 78,
          },
          {
            label: 'Location',
            field: 'location',
            sort: 'asc',
            width: 93,
          },
          {
            label: 'Bank_name',
            field: 'bankName',
            sort: 'asc',
            width: 109,
          },
          {
            label: 'Bank Acc_name',
            field: 'acc_name',
            sort: 'asc',
            width: 48,
          },
          {
            label: 'Bank Acc_no',
            field: 'acc_no',
            sort: 'asc',
            width: 110,
          },
          {
            label: 'Payment Status',
            field: 'status',
            sort: 'asc',
            width: 135,
          },
          {
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 120,
          },
        ],
        rows:
          this.props.data !== null &&
          this.props.data.map((vendor) => {
            return {
              id: (
                <Link to="#" className="text-dark font-weight-bold">
                  #NZ1572
                </Link>
              ),
              name: vendor.name,
              location: vendor.location,
              bankName: vendor.bank_details.bank_name,
              acc_name: vendor.bank_details.acc_name,
              acc_no: vendor.bank_details.acc_no,
              status: (
                <div
                  className={`badge ${
                    vendor.status ? 'badge-soft-success' : 'badge-soft-danger'
                  } font-size-12`}
                >
                  {vendor.status ? 'Active' : 'De_active'}
                </div>
              ),
              action: (
                <>
                  <Link to="#" className="mr-3 text-primary" id="edit1">
                    <i className="mdi mdi-pencil font-size-18"></i>
                  </Link>
                  <UncontrolledTooltip placement="top" target="edit1">
                    Edit
                  </UncontrolledTooltip>
                  {vendor.status ? (
                    <>
                      <Link
                        to="#"
                        onClick={() => this.updateHandler(vendor, false)}
                        className="text-danger"
                        id="de_activate"
                      >
                        <i className="far fa-check-circle font-size-18"></i>
                      </Link>
                      <UncontrolledTooltip placement="top" target="de_activate">
                        De_Activate
                      </UncontrolledTooltip>
                    </>
                  ) : (
                    <>
                      <Link
                        to="#"
                        onClick={() => this.updateHandler(vendor, true)}
                        className="text-success"
                        id="activate"
                      >
                        <i className="far fa-check-circle font-size-18"></i>
                      </Link>
                      <UncontrolledTooltip placement="top" target="activate">
                        Activate
                      </UncontrolledTooltip>
                    </>
                  )}
                </>
              ),
            };
          }),
      };
    }
    return (
      <React.Fragment>
        <MDBDataTable responsive data={data} className="mt-4" />
      </React.Fragment>
    );
  }
}

export default VendorTable;
