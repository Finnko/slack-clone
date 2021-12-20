import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSocket } from '../../contexts/SocketContext.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';
import ArrowSvg from '../../../assets/img/icons/arrow.svg';

const MessageForm = ({ activeChannel }) => {
  const { t } = useTranslation();
  const { sendMessage } = useSocket();
  const { user } = useAuth();

  const {
    values,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: ({ message }) => {
      sendMessage({
        body: message,
        channelId: activeChannel.id,
        user,
      });
    },
  });

  console.log({ touched });
  console.log({ values });
  console.log('!Object.keys(touched).length', !Object.keys(touched).length);

  return (
    <div className="mt-auto px-5 py-3">
      <Form noValidate className="py-1 border rounded-2" onSubmit={handleSubmit}>
        <div className="input-group has-validation">
          <Form.Control
            onChange={handleChange}
            type="text"
            name="message"
            placeholder={t('ui.form.fieldMessage')}
            aria-label={t('ui.aria.newMessage')}
            value={values.message}
            className="border-0 p-0 ps-2 form-control"
            disabled={isSubmitting}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-group-vertical"
              // disabled={!Object.keys(touched).length}
            >
              <ArrowSvg />
              <span className="visually-hidden">{t('ui.button.send')}</span>
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MessageForm;
