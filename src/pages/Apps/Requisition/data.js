import React from 'react';
import { Link } from 'react-router-dom';

export const data = {
  columns: [
    {
      field: 'id',
      label: 'No.',
    },
    {
      field: 'orderId',
      label: 'Request ID',
    },{
      field: 'item',
      label: 'Request Item',
    },
    {
      field: 'billingName',
      label: 'Title Name',
    },
    {
      field: 'total',
      label: 'Total',
    },
    {
      field: 'date',
      label: 'Date',
    },
    {
      field: 'status',
      label: 'Payment Status',
    },
    {
      field: 'actions',
      label: 'Actions',
    },
  ],
  rows: [
    {
      id: 1,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1572
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">Resolved</div>
      ),
    },
    {
      id: 2,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1571
        </Link>
      ),
      date: '03 Apr, 2020',
      billingName: 'Jimmy Barker',
      total: '$165',
      status: (
        <div className="badge badge-soft-warning font-size-12">pending</div>
      ),
    },
    {
      id: 3,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1570
        </Link>
      ),
      date: '03 Apr, 2020',
      billingName: 'Donald Bailey',
      total: '$146',
      status: (
        <div className="badge badge-soft-success font-size-12">Resolved</div>
      ),
    },
    {
      id: 4,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1569
        </Link>
      ),
      date: '02 Apr, 2020',
      billingName: 'Paul Jones',
      total: '$183',
      status: (
        <div className="badge badge-soft-success font-size-12">Resolved</div>
      ),
    },
    {
      id: 5,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1568
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-danger font-size-12">Rejected</div>
      ),
    },
    {
      id: 6,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1567
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-warning font-size-12">Pending</div>
      ),
    },
    {
      id: 7,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1566
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">Resolved</div>
      ),
    },
    {
      id: 8,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1565
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">Resolved</div>
      ),
    },
    {
      id: 9,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1564
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">Resolved</div>
      ),
    },
    {
      id: 10,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1563
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-warning font-size-12">pending</div>
      ),
    },
    {
      id: 11,
      item: 'Bag of Cements',
      orderId: (
        <Link to="#" className="text-dark font-weight-bold">
          #NZ1562
        </Link>
      ),
      date: '04 Apr, 2020',
      billingName: 'Walter Brown',
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">Resolved</div>
      ),
    },
  ],
};

export const options = {
  // pageStartIndex: 0,
  hideSizePerPage: false,
  hidePageListOnlyOnePage: false,
  sizePerPageList: [
    {
      text: '5th',
      value: 5,
    },
    {
      text: '10th',
      value: 10,
    },
    {
      text: 'All',
      value: data.rows.length,
    },
  ],
};
