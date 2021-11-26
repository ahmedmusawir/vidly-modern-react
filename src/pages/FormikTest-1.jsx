import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikTest() {
  const initialValues = {
    name: '',
    email: '',
    accept: false,
    gender: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required!'),
    email: Yup.string()
      .email('Invalid Email Format')
      .required('Email is Required!'),
    accept: Yup.boolean().oneOf(
      [true],
      'Must accept our terms and conditions!'
    ),
    gender: Yup.string().required('Must choose a gender!'),
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
            <h1 className='p-3'>Formik Test Page</h1>
          </Content>
          <Content width='w-100' cssClassNames='bg-dark'>
            <Form className='p-5' onSubmit={formik.handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name='name'
                  type='text'
                  placeholder='Name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className='error'>{formik.errors.name}</div>
                ) : null}
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='Enter email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='error'>{formik.errors.email}</div>
                ) : null}
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  name='accept'
                  type='checkbox'
                  label='Accept Terms & Conditions'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.accept}
                />
                {formik.touched.accept && formik.errors.accept ? (
                  <div className='error'>{formik.errors.accept}</div>
                ) : null}
              </Form.Group>

              <hr className='bg-info' />
              <Form.Text className=''>Please choose your Gender...</Form.Text>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  name='gender'
                  type='radio'
                  label='Male'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value='male'
                />
                <Form.Check
                  name='gender'
                  type='radio'
                  label='Female'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value='female'
                />
                {formik.touched.gender && formik.errors.gender ? (
                  <div className='error'>{formik.errors.gender}</div>
                ) : null}
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormikTest;
