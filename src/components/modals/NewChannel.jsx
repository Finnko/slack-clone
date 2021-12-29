import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import makeValidationsSchema from '../../helpers/makeValidationSchema.js';
import { selectChannelNames } from '../../store/channels/channelsSlice.js';
import { useSocket } from '../../contexts/SocketContext.jsx';

const NewChannel = ({ onClose }) => {
  const { t } = useTranslation();
  const { createChannel } = useSocket();
  const inputRef = useRef(null);
  const channelNames = useSelector(selectChannelNames);

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
    validationSchema: makeValidationsSchema(channelNames),
    onSubmit: async ({ channel }) => {
      try {
        await createChannel({ name: channel });
        onClose();
        toast.success(t('notifications.createChannel.success'));
      } catch (e) {
        console.log(e);
        toast.error(t('notifications.createChannel.error'));
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
            variant="primary"
            type="submit"
            disabled={!dirty || isSubmitting}
          >
            {t('ui.button.send')}
          </Button>
        </div>
      </Modal.Body>
    </Form>
  );
};

export default NewChannel;
