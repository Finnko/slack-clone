import React, { useEffect, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import makeValidationsSchema from '../../helpers/makeValidationSchema.js';
import { selectChannels } from '../../store/channels/channelsSlice.js';
import { useSocket } from '../../contexts/SocketContext.jsx';

const NewChannel = ({ onClose }) => {
  const { t } = useTranslation();
  const { createChannel } = useSocket();
  const inputRef = useRef(null);
  const channels = useSelector(selectChannels);

  const {
    values,
    dirty,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      channel: '',
    },
    validationSchema: makeValidationsSchema(channels),
    onSubmit: async ({ channel }) => {
      try {
        await createChannel({ name: channel });
        onClose();
      } catch (e) {
        console.log(e);
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>{t('ui.modal.newChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group controlId="channel">
          <Form.Control
            type="text"
            name="channel"
            ref={inputRef}
            className="mb-2"
            value={values.channel}
            onChange={handleChange}
            disabled={isSubmitting}
            isInvalid={errors.channel && touched.channel}
          />
          <Form.Control.Feedback type="invalid">
            {t(`${errors.channel}`)}
          </Form.Control.Feedback>
        </Form.Group>

      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          type="button"
          onClick={onClose}
        >
          {t('ui.button.cancel')}
        </Button>
        <Button
          variant="primary"
          type="submit"
          disabled={!dirty || isSubmitting}
        >
          {t('ui.button.send')}
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default NewChannel;
