import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NewChannel = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <Form>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>

      <div />

      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={onClose}>
          {t('ui.button.cancel')}
        </Button>
        <Button variant="primary" type="submit" onClick={onClose}>
          {t('ui.button.send')}
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default NewChannel;
