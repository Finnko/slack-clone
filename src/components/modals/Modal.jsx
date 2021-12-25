import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import NewChannel from './NewChannel.jsx';
import { ModalType } from '../../const.js';
import { hideModal, selectModalState } from '../../store/modal/modalSlice.js';

const ChannelModal = () => {
  const dispatch = useDispatch();
  const { isOpened, type } = useSelector(selectModalState);

  const handleClose = () => dispatch(hideModal());

  const renderModalContent = (modalType) => {
    switch (modalType) {
      case ModalType.NEW_CHANNEL:
        return <NewChannel onClose={handleClose} />;
      default:
        throw new Error(`Unknown modal type ${type}`);
    }
  };

  if (type === null) {
    return null;
  }

  return (
    <Modal show={isOpened} centered onHide={handleClose}>
      {renderModalContent(type)}
    </Modal>
  );
};

export default ChannelModal;
