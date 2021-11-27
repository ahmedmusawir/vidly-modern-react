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
    tech: '',
  };

  // const { resetFrom } = useFormikContext();
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
    formik.values.gender = '';
    formik.values.tech = '';
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
    tech: Yup.string().required('Must choose a TECH!'),
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
            <h1 className='p-3'>
              Formik Test Page <small>w/ Bootstrap Comps (buggy)</small>
            </h1>
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
                  <div className='alert alert-danger'>{formik.errors.name}</div>
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
                  <div className='alert alert-danger'>
                    {formik.errors.email}
                  </div>
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
                  <div className='alert alert-danger'>
                    {formik.errors.accept}
                  </div>
                ) : null}
              </Form.Group>

              <hr className='bg-info' />
              <Form.Text className='mb-2'>Please choose your Gender:</Form.Text>
              <Form.Group className='mb-3' controlId='formBasicRadio'>
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
                  <div className='alert alert-danger'>
                    {formik.errors.gender}
                  </div>
                ) : null}
              </Form.Group>
              <hr className='bg-info' />
              <Form.Text className='mb-2'>
                Please choose a Technology:
              </Form.Text>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Control
                  as='select'
                  name='tech'
                  value={formik.values.tech}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option>Choose A Tech</option>
                  <option value='react'>React</option>
                  <option value='next-js'>Next JS</option>
                  <option value='graph-ql'>GraphQL</option>
                </Form.Control>
                {formik.touched.tech && formik.errors.tech ? (
                  <div className='alert alert-danger'>{formik.errors.tech}</div>
                ) : null}
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
              <Button
                className='ml-1'
                variant='warning'
                type='reset'
                onClick={() => formik.resetForm()}
              >
                Reset
              </Button>
            </Form>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormikTest;
