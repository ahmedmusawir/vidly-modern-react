import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikHtml() {
  const initialValues = {
    userName: '',
    userEmail: '',
    accept: false,
    gender: '',
    location: '',
    comment: '',
  };

  const onSubmit = ({ values, actions }) => {
    console.log(values);
    console.log(actions);
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required('Name is Required!'),
    userEmail: Yup.string()
      .email('Invalid Email Format')
      .required('Email is Required!'),
    accept: Yup.boolean().oneOf(
      [true],
      'Must accept our terms and conditions!'
    ),
    gender: Yup.string().required('Must choose a Gender!'),
    location: Yup.string().required('Must choose a location!'),
    comment: Yup.string().required('Must Leave a comment!'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log('Form Values: ', formik.values);

  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-secondary'>
            <h4 className='p-3'>
              Formik Page <small>w/ Formik Component</small>
            </h4>
          </Content>
          <Content width='w-100' cssClassNames='bg-dark'>
            {/* SIMPLE FORM */}
            <form className='p-3 bg-secondary' onSubmit={formik.handleSubmit}>
              {/* TEXT INPUT */}
              <div className='mb-2'>
                <label htmlFor='userName' className='form-label'>
                  User Name
                </label>
                <input
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='User Name'
                  className={
                    formik.touched.userName && formik.errors.userName
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div className='alert alert-danger'>
                    {formik.errors.userName}
                  </div>
                ) : null}
              </div>
              {/* EMAIL INPUT */}
              <div className='mb-2'>
                <label htmlFor='userEmail' className='form-label'>
                  User Email
                </label>
                <input
                  type='text'
                  name='userEmail'
                  id='userEmail'
                  placeholder='User Email'
                  className={
                    formik.touched.userEmail && formik.errors.userEmail
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userEmail}
                />
                {formik.touched.userEmail && formik.errors.userEmail ? (
                  <div className='alert alert-danger'>
                    {formik.errors.userEmail}
                  </div>
                ) : null}
              </div>
              <hr className='bg-primary' />

              {/* CHECKBOX */}
              <div className='form-check pb-1 mb-2'>
                <input
                  name='accept'
                  className='form-check-input'
                  type='checkbox'
                  checked={formik.values.accept}
                  id='flexCheckDefault'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.accept}
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Accept Privacy Policy
                </label>
                {formik.touched.accept && formik.errors.accept ? (
                  <div className='alert alert-danger'>
                    {formik.errors.accept}
                  </div>
                ) : null}
              </div>
              {/* RADIO BUTTONS */}
              <div className='form-check'>
                <input
                  name='gender'
                  id='flexRadioDefault1'
                  type='radio'
                  className='form-check-input'
                  value='male'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === 'male'}
                />
                <label className='form-check-label' htmlFor='flexRadioDefault1'>
                  Male
                </label>
              </div>
              <div className='form-check'>
                <input
                  name='gender'
                  id='flexRadioDefault2'
                  type='radio'
                  className='form-check-input'
                  value='female'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === 'female'}
                />
                <label className='form-check-label' htmlFor='flexRadioDefault2'>
                  Female
                </label>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className='alert alert-danger'>
                    {formik.errors.gender}
                  </div>
                ) : null}
              </div>
              <hr className='bg-primary' />
              {/* SELECT BOX */}
              <div className='mb-3'>
                <select
                  name='location'
                  className={
                    formik.touched.location && formik.errors.location
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  aria-label='Default select example'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                >
                  <option defaultValue=''>Choose A Location</option>
                  <option value='paris'>Paris</option>
                  <option value='kuala lumpur'>KL</option>
                  <option value='sarasota'>Sarasota</option>
                </select>
                {formik.touched.location && formik.errors.location ? (
                  <div className='alert alert-danger'>
                    {formik.errors.location}
                  </div>
                ) : null}
              </div>
              {/* TEXT AREA */}
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label mt-2'
                >
                  LEAVE A COMMENT
                </label>
                <textarea
                  name='comment'
                  className={
                    formik.touched.comment && formik.errors.comment
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  id='exampleFormControlTextarea1'
                  rows='3'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                ></textarea>
                {formik.touched.comment && formik.errors.comment ? (
                  <div className='alert alert-danger'>
                    {formik.errors.comment}
                  </div>
                ) : null}
              </div>
              <hr className='bg-primary' />
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
              <button
                className='btn btn-warning ml-1'
                type='reset'
                onClick={() => formik.resetForm()}
              >
                Reset
              </button>
            </form>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormikHtml;
