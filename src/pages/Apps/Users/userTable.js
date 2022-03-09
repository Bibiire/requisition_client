import React, { useEffect, useState } from 'react';
import { UncontrolledTooltip, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { MDBDataTable } from 'mdbreact';
import '../../../assets/scss/datatables.scss';
// import { v4 as uuid } from 'uuid';

const UserTable = ({ data, loading, updateUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setData] = useState(true);
//   const unique_id = uuid();

  useEffect(() => {
    if (data !== null && !loading) {
      console.log(data);
      let clonedData = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 93,
          },
          // {
          //   label: 'Department',
          //   field: 'department',
          //   sort: 'asc',
          //   width: 109,
          // },
        //   {
        //     label: 'Bank Acc_name',
        //     field: 'acc_name',
        //     sort: 'asc',
        //     width: 48,
        //   },
        //   {
        //     label: 'Bank Acc_no',
        //     field: 'acc_no',
        //     sort: 'asc',
        //     width: 110,
        //   },
        //   {
        //     label: 'Payment Status',
        //     field: 'status',
        //     sort: 'asc',
        //     width: 135,
        //   },
          // {
          //   label: 'Action',
          //   field: 'action',
          //   sort: 'asc',
          //   width: 120,
          // },
        ],
        rows:
          data !== null &&
          data.map((user) => {
            return {
              id: (
                <Link to="#" className="text-dark font-weight-bold">
                  #NZ1572
                </Link>
              ),
              name: user.name,
              email: user.email,
            //   department: user?.department?.bank_name,
            //   acc_name: vendor?.bank_details?.acc_name,
            //   acc_no: vendor?.bank_details?.acc_no,
            //   status: (
            //     <div
            //       className={`badge ${
            //         vendor.status ? 'badge-soft-success' : 'badge-soft-danger'
            //       } font-size-12`}
            //     >
            //       {vendor.status ? 'Active' : 'De_active'}
            //     </div>
            //   ),
              // action: (
              //   <>
              //     <Link to="#" className="mr-3 text-primary" id="edit1">
              //       <i className="mdi mdi-pencil font-size-18"></i>
              //     </Link>
              //     <UncontrolledTooltip placement="top" target="edit1">
              //       Edit
              //     </UncontrolledTooltip>
              //     {user.status ? (
              //       <>
              //         <Link
              //           to="#"
              //           onClick={() => updateHandler(user, false)}
              //           className="text-danger"
              //           id="de_activate"
              //         >
              //           <i className="far fa-check-circle font-size-18"></i>
              //         </Link>
                      // {/* <UncontrolledTooltip placement="top" target="de_activate">
                  //       De_Activate
                  //     </UncontrolledTooltip> */}
                  //   </>
                  // ) : (
                  //   <>
                  //     <Link
                  //       to="#"
                  //       onClick={() => updateHandler(user, true)}
                  //       className="text-success"
                  //       id="activate"
                  //     >
                  //       <i className="far fa-check-circle font-size-18"></i>
                  //     </Link>
                  //     {/* <UncontrolledTooltip placement="top" target="activate">
                  //       Activate
                  //     </UncontrolledTooltip> */}
                  //   </>
                  // )}
                // </>
              // ),
            };
          }),
      };
      setData(clonedData);
      setIsLoading(false);
    }
  }, [data]);

  const updateHandler = (value, state) => {
    const newUser = {
      ...value,
      status: state,
    };
    updateUser(newUser);
  };

  return (
    <React.Fragment>
      {!isLoading && (
        <MDBDataTable responsive data={userData} className="mt-4" />
      )}
    </React.Fragment>
  );
};

export default UserTable;
