import React from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import routes from '../../routes.js';

import loginPic from '../../../assets/img/login.jpg';
import { login } from '../../api/api';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { HttpCode } from '../../const.js';

const schema = yup.object({
  username: yup.string()
    .required('error.required'),
  password: yup.string()
    .required('error.required'),
});

const Login = () => {
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
    },
    validationSchema: schema,
    onSubmit: async ({ username, password }) => {
      try {
        const { token, username: user } = await login({ username, password });
        setToken(token);
        setUser(user);
        navigate(routes.root());
      } catch (e) {
        if (e.status === HttpCode.Unauthorized) {
          setFieldError('password', 'error.invalidCredentials');
        } else {
          setFieldError('password', 'error.unknown');
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
              <div className="card-body row p-5">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img
                    src={loginPic}
                    className="rounded-circle"
                    alt={t('ui.form.loginTitle')}
                  />
                </div>

                <Form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={handleSubmit}>
                  <h1 className="text-center mb-4">{t('ui.form.loginTitle')}</h1>

                  <FloatingLabel
                    controlId="username"
                    label={t('ui.form.fieldUserName')}
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="username"
                      autoComplete="off"
                      placeholder={t('ui.form.fieldUserName')}
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
                      // autoComplete="current-password"
                      placeholder={t('ui.form.fieldPassword')}
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={errors.password && touched.password}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.password}`)}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Button
                    className="w-100 mb-3"
                    variant="outline-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {t('ui.button.login')}
                  </Button>
                </Form>

              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span>{t('ui.text.noAccount')}</span>
                  {' '}
                  <Link to={routes.signup()}>{t('ui.link.register')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
