import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'reactstrap';

export const data = {
  columns: [
    // {
    //   field: 'id',
    //   label: 'No.',
    // },
    // {
    //   field: 'orderId',
    //   label: 'Request ID',
    // },
    {
      field: 'name',
      label: 'Project Name',
    },
    {
      field: 'progress',
      label: 'Progress',
    },
    // {
    //   field: 'member',
    //   label: 'member',
    // },
    // {
    //   field: 'date',
    //   label: 'Date',
    // },
    {
      field: 'status',
      label: 'Status',
    },
    {
      field: 'actions',
      label: 'Actions',
    },
  ],
  rows: [
    {
      id: 1,
      name: (
        <>
          <h4 className="text-dark font-size-14"> Trancal </h4>
          <span className="text-muted font-size-10">
            {' '}
            <span className="fw-bolder text-dark"> 3 </span> open tasks,{' '}
            <span className="fw-bolder text-dark"> 10 </span>tasks completed{' '}
          </span>
        </>
      ),
      progress: (
        <>
          <Progress
            style={{ height: '5px' }}
            className="mt-3"
            color="success"
            value={45}
          ></Progress>
          <div className="text-center">45%</div>
        </>
      ),
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
        <div className="badge badge-soft-secondary font-size-12  mt-3">
          Pending
        </div>
      ),
    },
    {
      id: 2,
      name: (
        <>
          <h4 className="text-dark font-size-14"> Requisition </h4>
          <span className="text-muted font-size-10">
            {' '}
            <span className="fw-bolder text-dark"> 3 </span> open tasks,{' '}
            <span className="fw-bolder text-dark"> 10 </span>tasks completed{' '}
          </span>
        </>
      ),
      progress: (
        <>
          <Progress
            style={{ height: '5px' }}
            className="mt-3"
            color="success"
            value={5}
          ></Progress>
          <div className="text-center">100%</div>
        </>
      ),
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
        <div className="badge badge-soft-warning font-size-12  mt-3">
          Ongoing
        </div>
      ),
    },
    {
      id: 3,
      name: (
        <>
          <h4 className="text-dark font-size-14"> Trancal </h4>
          <span className="text-muted font-size-10">
            {' '}
            <span className="fw-bolder text-dark"> 3 </span> open tasks,{' '}
            <span className="fw-bolder text-dark"> 10 </span>tasks completed{' '}
          </span>
        </>
      ),
      progress: (
        <>
          <Progress
            style={{ height: '5px' }}
            className="mt-3"
            color="success"
            value={90}
          ></Progress>
          <div className="text-center">90%</div>
        </>
      ),
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
        <div className="badge badge-soft-success font-size-12  mt-3">Done</div>
      ),
    },
    {
      id: 4,
      name: (
        <>
          <h4 className="text-dark font-size-14"> Requisition </h4>
          <span className="text-muted font-size-10">
            {' '}
            <span className="fw-bolder text-dark"> 3 </span> open tasks,{' '}
            <span className="fw-bolder text-dark"> 10 </span>tasks completed{' '}
          </span>
        </>
      ),
      progress: (
        <>
          <Progress
            style={{ height: '5px' }}
            className="mt-3"
            color="success"
            value={20}
          ></Progress>
          <div className="text-center">20%</div>
        </>
      ),
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
        <div className="badge badge-soft-secondary font-size-12 mt-3">
          Pending
        </div>
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
