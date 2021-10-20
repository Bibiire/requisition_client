import React from 'react';
import { Media } from 'reactstrap';
import avatar6 from '../../../../assets/images/users/avatar-6.jpg';

import pdf from '../../../../assets/images/items/pdfImage.png';

const UserMedia = ({ complainInfo, detail, showDetail }) => {
  return (
    <>
      <div className="mb-2">
        <Media>
          <img
            className="avatar-sm mr-3 rounded-circle"
            src={avatar6}
            alt="Nazox"
          />
          <Media body>
            <h5 className="mt-0 font-size-14">{complainInfo.fullName}</h5>
            <p>{detail ? complainInfo.email : complainInfo.title}</p>
          </Media>
        </Media>
        <div
          className={`categories-group-card mb-3 mt-2 ${!detail && 'd-none'}`}
        >
          {' '}
        </div>
        {detail && <h5 className="font-size-14 mb-4"> {complainInfo.title}</h5>}
        <div className={`text-muted ${!detail && 'text-truncate'}`}>
          {complainInfo.content}
        </div>

        {detail && (
          <>
            <div className="categories-group-card my-4" />
            <h5 className="font-size-14">
              <i className="fas fa-paperclip" /> 1 Attachment
            </h5>
            <div>
              <img src={pdf} alt="pdf" width="16" className="mr-2" />
              <span className="text-muted font-weight-bolder align-text-top">
                Sample.doc
              </span>
              <span className="text-muted font-size-12 ml-1"> (21mb) </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserMedia;
