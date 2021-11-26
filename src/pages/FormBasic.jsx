import React, { useState } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';

function FormBasic() {
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState('');

  console.log(isChecked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      userName: name,
    };
    console.log('Form Values: ', values);
    setName('');
    e.target.reset();
  };
  return (
    <Page wide={true} pageTitle='Form Basic'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <div className='alert alert-primary'>Name: {name}</div>
            <div
              className={
                isChecked ? 'alert alert-success' : 'alert alert-danger'
              }
            >
              Accept: {isChecked ? 'True' : 'Lying Trump'}
            </div>
            <div className='alert alert-warning'>Gender: {gender}</div>
            <form className='p-5 bg-secondary' onSubmit={handleSubmit}>
              <div className='mb-2'>
                <label htmlFor='userName' className='form-label'>
                  User Name
                </label>
                <input
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='User Name'
                  className='form-control'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-check pb-1 mb-2'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={isChecked}
                  id='flexCheckDefault'
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Accept Privacy Policy
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  //   name='flexRadioDefault'
                  id='flexRadioDefault1'
                  value='male'
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === 'male'}
                />
                <label className='form-check-label' htmlFor='flexRadioDefault1'>
                  Male
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  //   name='flexRadioDefault'
                  id='flexRadioDefault2'
                  value='female'
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === 'female'}
                />
                <label className='form-check-label' htmlFor='flexRadioDefault2'>
                  Female
                </label>
              </div>
              <hr className='bg-primary' />
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
              <button className='btn btn-warning ml-1' type='reset'>
                Reset
              </button>
            </form>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormBasic;
