import React from 'react';
import Page from './layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from './layouts/Content';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';
import { genres } from '../data/fakeGenreData';

function MovieForm() {
  const initialValues = {
    title: '',
    genreId: '',
    numberInStock: '',
    dailyRentalRate: '',
  };
  const gArray = genres;
  const newObj = { key: '', value: 'Choose a genre' };
  // const newArray = [...genres, ];
  gArray.push(newObj);

  const selectOptions = gArray.map((item) => {
    return { key: item.name, value: item._id };
  });
  console.log(selectOptions);

  // const selectOptions = [
  //   { key: 'Choose Genre', value: '' },
  //   { key: 'Action', value: '#1' },
  //   { key: 'Comedy', value: '#2' },
  //   { key: 'Drama', value: '#3' },
  // ];

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: initialValues });
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is Required!'),
    genreId: Yup.string().required('Must choose a Genre!'),
    numberInStock: Yup.string().required('Number in Stock is Required!'),
    dailyRentalRate: Yup.string().required('Daily Rental Rate is Required!'),
  });

  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-dark'>
            {/* FORMIK FORM */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => (
                <Form className='p-3 bg-light formik-comp'>
                  {/* MOVIE TITLE */}
                  <div className='mb-2'>
                    <FormikControl
                      control='input'
                      type='text'
                      name='title'
                      label='Movie Title'
                      placeholder='Title of the Movie'
                      className={
                        formik.touched.title && formik.errors.title
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                  </div>
                  {/* NUMBER IN STOCK */}
                  <div className='mb-2'>
                    <FormikControl
                      control='input'
                      type='text'
                      name='numberInStock'
                      label='Movies in Stock'
                      placeholder='Number of Movies in Stock'
                      className={
                        formik.touched.numberInStock &&
                        formik.errors.numberInStock
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                  </div>
                  {/* DAILY RENTAL RATE */}
                  <div className='mb-2'>
                    <FormikControl
                      control='input'
                      type='text'
                      name='dailyRentalRate'
                      label='Daily Rental Rate'
                      placeholder='Rental Rate'
                      className={
                        formik.touched.dailyRentalRate &&
                        formik.errors.dailyRentalRate
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                  </div>

                  <hr className='bg-primary' />
                  {/* GENRE SELECT BOX */}
                  <div className='mb-2'>
                    <FormikControl
                      control='select'
                      name='genreId'
                      label='Choose A Genre:'
                      options={selectOptions}
                      className='form-control'
                    />
                  </div>

                  <hr className='bg-primary' />
                  <button
                    className='btn btn-primary'
                    type='submit'
                    // disabled={!formik.isValid}
                  >
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

export default MovieForm;
