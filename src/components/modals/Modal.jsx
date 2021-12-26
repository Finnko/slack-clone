import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import RemoveChannel from './RemoveChannel.jsx';
import NewChannel from './NewChannel.jsx';
import RenameChannel from './RenameChannel.jsx';
import { ModalType } from '../../const.js';
import { hideModal, selectModalState } from '../../store/modal/modalSlice.js';

const ChannelModal = () => {
  const dispatch = useDispatch();
  const { isOpened, type, extra } = useSelector(selectModalState);

  const handleClose = () => dispatch(hideModal());

  const renderModalContent = (modalType) => {
    switch (modalType) {
      case ModalType.NEW_CHANNEL:
        return <NewChannel onClose={handleClose} />;
      case ModalType.REMOVE_CHANNEL:
        return <RemoveChannel onClose={handleClose} extra={extra} />;
      case ModalType.RENAME_CHANNEL:
        return <RenameChannel onClose={handleClose} channelData={extra} />;
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
