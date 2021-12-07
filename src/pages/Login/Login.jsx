import React from 'react';
import * as yup from 'yup';
import MainLayout from '@src/layouts/MainLayout/MainLayout';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import constructPath from '@src/routes';

import loginPic from '@assets/img/login.jpg';

const schema = yup.object({
  username: yup.string()
    .required('error.required'),
  password: yup.string()
    .required('error.required'),
});

const Login = () => {
  const { t } = useTranslation();

  const {
    values, errors, touched, handleChange, handleSubmit,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: schema,
  });

  const onSubmit = (valuesData) => {
    console.log({ valuesData });
  };

  console.log({ values });
  console.log({ errors });

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
                      isInvalid={errors?.username && touched?.username}
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
                      isInvalid={errors?.password && touched?.password}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.password}`)}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Button variant="outline-primary" type="submit" className="w-100 mb-3">
                    {t('ui.button.login')}
                  </Button>
                </Form>

              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span>{t('ui.text.noAccount')}</span>
                  {' '}
                  <Link to={constructPath.signup()}>{t('ui.link.register')}</Link>
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
