import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import constructPath from '../../routes';
import loginPic from '@assets/img/login.jpg';

const Login = () => {
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
                    alt="Войти"
                  />
                </div>

                <Form className="col-12 col-md-6 mt-3 mt-mb-0">
                  <h1 className="text-center mb-4">Войти</h1>

                  <FloatingLabel
                    controlId="username"
                    label="Ваш ник"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="username"
                      autoComplete="off"
                      value=""
                      placeholder="Ваш ник"
                      required
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="password"
                    label="Пароль"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      name="password"
                      // autoComplete="current-password"
                      placeholder="Пароль"
                      value=""
                      required
                    />
                  </FloatingLabel>

                  <Button variant="outline-primary" type="submit" className="w-100 mb-3">Войти</Button>
                </Form>

              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span>Нет аккаунта?</span>

                  <Link to={constructPath.signup()}>Регистрация</Link>
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
