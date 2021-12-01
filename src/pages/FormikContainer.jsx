import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormikControl from '../components/formik/FormikControl';
import * as Yup from 'yup';
import './FormikComp.scss';

function FormikContainer() {
  const initialValues = {
    userName: '',
    userPassword: '',
    userEmail: '',
    userBirthDate: null,
    accept: false,
    countries: [],
    gender: '',
    location: '',
    comment: '',
  };

  const selectOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Atlanta', value: 'atlanta-ga' },
    { key: 'KL', value: 'kulala-lumpur-my' },
    { key: 'Sarasota', value: 'sarasota-fl' },
  ];

  const radioOptions = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
    { key: 'Other', value: 'other' },
  ];

  const checkboxOptions = [
    { key: 'U.S.A', value: 'united-state' },
    { key: 'Malaysia', value: 'malaysia' },
    { key: 'India', value: 'india' },
  ];

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm({ values: initialValues });
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required('Name is Required!'),
    userPassword: Yup.string().required('Password is Required!'),
    userEmail: Yup.string()
      .email('Invalid Email Format')
      .required('Email is Required!'),
    accept: Yup.boolean().oneOf(
      [true],
      'Must accept our terms and conditions!'
    ),
    userBirthDate: Yup.date()
      .required('Must insert a Date of Birth')
      .nullable(),
    countries: Yup.array().min(1, 'Must choose at least one country'),
    gender: Yup.string().required('Must choose a Gender!'),
    location: Yup.string().required('Must choose a location!'),
    comment: Yup.string().required('Must Leave a comment!'),
  });

  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-secondary'>
            <h4 className='p-3'>
              Formik Container <small>for Component Library</small>
            </h4>
          </Content>
          <Content width='w-100' cssClassNames='bg-dark'>
            {/* FORMIK FORM */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => (
                <Form className='p-3 bg-light formik-comp'>
                  {/* TEXT INPUT */}
                  <div className='mb-2'>
                    <FormikControl
                      control='input'
                      type='text'
                      name='userName'
                      label='User Name'
                      placeholder='Your Name'
                      className={
                        formik.touched.userName && formik.errors.userName
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                  </div>
                  {/* PASSWORD INPUT */}
                  <div className='mb-2'>
                    <FormikControl
                      control='input'
                      type='password'
                      name='userPassword'
                      label='User Password'
                      placeholder='Your Password'
                      className={
                        formik.touched.userPassword &&
                        formik.errors.userPassword
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                  </div>
                  {/* EMAIL INPUT */}
                  <div className='mb-2'>
                    <FormikControl
                      control='input'
                      type='email'
                      name='userEmail'
                      label='User Email'
                      placeholder='Your Email'
                      className={
                        formik.touched.userEmail && formik.errors.userEmail
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                  </div>
                  {/* DATEPICKER */}
                  <div className='mb-3'>
                    <FormikControl
                      control='date'
                      name='userBirthDate'
                      label='Date of Birth'
                    />
                  </div>
                  <hr className='bg-primary' />

                  {/* CHECKBOX */}
                  <div className='form-check pb-1 mb-2'>
                    <Field
                      name='accept'
                      className='form-check-input'
                      type='checkbox'
                      id='flexCheckDefault'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'
                    >
                      Accept Privacy Policy
                    </label>
                    <ErrorMessage
                      name='accept'
                      component='div'
                      className='alert alert-danger'
                    />
                  </div>
                  {/* CHECKBOX GROUP */}
                  <div className='mb-3'>
                    <FormikControl
                      control='checkbox'
                      name='countries'
                      label='Countries Visited:'
                      options={checkboxOptions}
                    />
                  </div>
                  {/* RADIO BUTTONS */}
                  <div className='mb-3'>
                    <FormikControl
                      control='radio'
                      name='gender'
                      label='Choose a Gender'
                      options={radioOptions}
                    />
                  </div>
                  <hr className='bg-primary' />
                  {/* SELECT BOX */}
                  <div className='mb-2'>
                    <FormikControl
                      control='select'
                      name='location'
                      label='Choose A Location:'
                      options={selectOptions}
                      className='form-control'
                    />
                  </div>

                  {/* TEXT AREA */}
                  <div className='mb-3'>
                    <FormikControl
                      control='textarea'
                      name='comment'
                      label='LEAVE A COMMENT'
                      placeholder='Your Comment'
                      rows={4}
                      className={
                        formik.touched.comment && formik.errors.comment
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                  </div>
                  <hr className='bg-primary' />
                  <button className='btn btn-primary' type='submit'>
                    Submit
                  </button>
                  <button className='btn btn-warning ml-1' type='reset'>
                    Reset
                  </button>
                </Form>
              )}
            </Formik>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormikContainer;
