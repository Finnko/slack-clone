import React from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSocket } from '../../contexts/SocketContext.jsx';

const NewChannel = ({ onClose, extra }) => {
  const { t } = useTranslation();
  const { removeChannel } = useSocket();
  const { id } = extra;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await removeChannel({ id });
      onClose();
      toast.success(t('notifications.removeChannel.success'));
    } catch (e) {
      console.log(e);
      toast.error(t('notifications.removeChannel.error'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>{t('ui.modal.removeChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="lead">{t('ui.text.areYouSure')}</p>

        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            type="button"
            className="me-2"
            onClick={onClose}
          >
            {t('ui.button.cancel')}
          </Button>
          <Button
            variant="danger"
            type="submit"
          >
            {t('ui.button.remove')}
          </Button>
        </div>
      </Modal.Body>
    </Form>
  );
};

export default NewChannel;
