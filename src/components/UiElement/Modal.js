import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const UiModal = ({ modal_static, SetModalStatic, title, children }) => {
  // const [modal_static, SetModalStatic] = useState(false);

  const tog_modal_handler = () => {
    SetModalStatic();
    removeBodyCss();
  };

  const removeBodyCss = () => {
    document.body.classList.add('no_padding');
  };

  return (
    <React.Fragment>
      <div></div>
      <Modal
        isOpen={modal_static}
        scrollable={true}
        toggle={tog_modal_handler}
        backdrop="static"
        size="lg"
      >
        <ModalHeader toggle={() => SetModalStatic({ modal_static: false })}>
          {title ? title : 'Registration'}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default UiModal;
