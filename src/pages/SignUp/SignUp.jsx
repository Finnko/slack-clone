import React from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';
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
    .min(3, 'error.invalidUserName')
    .max(20, 'error.invalidUserName'),
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

                  <Form.Group className="form-floating mb-3 form-group">
                    <Form.Control
                      type="text"
                      placeholder={t('ui.form.fieldNewUser')}
                      name="username"
                      id="username"
                      autoComplete="off"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={errors.username && touched.username}
                    />
                    <Form.Label htmlFor="username">{t('ui.form.fieldNewUser')}</Form.Label>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.username}`)}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="form-floating mb-3 form-group">
                    <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      placeholder={t('ui.form.fieldPassword')}
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={errors.password && touched.password}
                    />
                    <Form.Label htmlFor="password">{t('ui.form.fieldPassword')}</Form.Label>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.password}`)}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="form-floating mb-4 form-group">
                    <Form.Control
                      type="password"
                      name="passwordConfirmation"
                      id="passwordConfirmation"
                      placeholder={t('ui.form.fieldPasswordConfirmation')}
                      value={values.passwordConfirmation}
                      onChange={handleChange}
                      isInvalid={errors.passwordConfirmation && touched.passwordConfirmation}
                    />
                    <Form.Label htmlFor="passwordConfirmation">{t('ui.form.fieldPasswordConfirmation')}</Form.Label>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {t(`${errors.passwordConfirmation}`)}
                    </Form.Control.Feedback>
                  </Form.Group>

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
