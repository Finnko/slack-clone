import React, { useRef } from 'react';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useSocket } from '../../contexts/SocketContext.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';
import ArrowSvg from '../../../assets/img/icons/arrow.svg';

const schema = yup.object({
  message: yup.string().min(1),
});

const MessageForm = ({ activeChannel }) => {
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const { sendMessage } = useSocket();
  const { user } = useAuth();

  const {
    isValid,
    values,
    dirty,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: schema,
    onSubmit: async ({ message }, { resetForm }) => {
      try {
        await sendMessage({
          body: message,
          channelId: activeChannel.id,
          user,
        });

        resetForm();
        inputRef.current.focus();
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div className="mt-auto px-5 py-3">
      <Form noValidate className="py-1 border rounded-2" onSubmit={handleSubmit}>
        <div className="input-group has-validation">
          <Form.Control
            className="border-0 p-0 ps-2 form-control"
            ref={inputRef}
            type="text"
            name="message"
            placeholder={t('ui.form.fieldMessage')}
            aria-label={t('ui.aria.newMessage')}
            value={values.message}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-group-vertical"
              disabled={!dirty || !isValid || isSubmitting}
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
