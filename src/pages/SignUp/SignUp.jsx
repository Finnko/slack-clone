import React from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import routes from '../../routes.js';

import registerPic from '../../../assets/img/register.jpg';
import { register } from '../../api/api';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { HttpCode } from '../../const.js';

const schema = yup.object({
  username: yup.string()
    .required('error.required')
    .min(3, 'error.invalidUsername')
    .max(20, 'error.invalidUsername'),
  password: yup.string()
    .required('error.required')
    .min(6, 'error.invalidUserPassword'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'error.passwordMatch'),
});

const SignUp = () => {
  const { t } = useTranslation();
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldError,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: schema,
    onSubmit: async ({ username, password }) => {
      try {
        const { token, username: user } = await register({ username, password });
        setToken(token);
        setUser(user);
        navigate(routes.root());
      } catch (e) {
        if (e.response.status === HttpCode.AlreadyExists) {
          setFieldError('password', 'error.userExists');
        } else {
          toast.error(t('notifications.registerError'));
        }
      }
    },
  });

  return (
    <MainLayout>
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
                <div>
                  <img
                    src={registerPic}
                    className="rounded-circle"
                    alt={t('ui.form.registerTitle')}
                  />
                </div>

                <Form className="w-50" onSubmit={handleSubmit}>
                  <h1 className="text-center mb-4">{t('ui.form.registerTitle')}</h1>

                  <FloatingLabel
                    controlId="username"
                    label={t('ui.form.fieldNewUser')}
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="username"
                      autoComplete="off"
                      placeholder={t('ui.form.fieldNewUser')}
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={errors.username && touched.username}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.username}`)}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="password"
                    label={t('ui.form.fieldPassword')}
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder={t('ui.form.fieldPassword')}
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={errors.password && touched.password}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.password}`)}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="passwordConfirmation"
                    label={t('ui.form.fieldPasswordConfirmation')}
                    className="mb-4"
                  >
                    <Form.Control
                      type="password"
                      name="passwordConfirmation"
                      placeholder={t('ui.form.fieldPasswordConfirmation')}
                      value={values.passwordConfirmation}
                      onChange={handleChange}
                      isInvalid={errors.passwordConfirmation && touched.passwordConfirmation}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.passwordConfirmation}`)}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Button
                    className="w-100"
                    variant="outline-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {t('ui.button.register')}
                  </Button>
                </Form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
