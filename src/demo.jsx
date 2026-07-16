import React, { useEffect, useState } from 'react';
import { Form, useFormik } from 'formik';

function Login_page() {

    function ValidateUser(formData) {

        const errors = {};

        if (formData.UserName.length === 0) {
            errors.UserName = 'UserName Required';
        }
        else {
            if (formData.UserName.length < 4) {
                errors.UserName = 'Name is too short'
            }
        }

        if (formData.Age === '' || formData.Age === 0) {
            errors.Age = 'Age Required';
        }
        else {
            if (isNaN(formData.Age)) {
                errors.Age = 'Age must be number'
            }
        }

        if (formData.City === '') {
            errors.City = 'City Required';
        }

        if (formData.Gender === '') {
            errors.Gender = 'Gender Required';
        }

        if (formData.Email === '') {
            errors.Email = 'Email Required';
        }
        else {
            if (formData.Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {

            }
            else {
                errors.Email = 'Invalid Email'
            }
        }

        if (formData.MobileNumber === '') {
            errors.MobileNumber = 'Mobile Number Required';
        }
        else {
            if (formData.MobileNumber.match(/\+91\d{10}/)) {

            }
            else {
                errors.MobileNumber = 'Invalid Mobile Number';
            }
        }

        if (formData.Password === '') {
            errors.Password = 'Password Required';
        }

        if (formData.Confirmpassword === '') {
            errors.Confirmpassword = 'Confirm Password Required';
        }

        if (
            formData.Password !== '' &&
            formData.Confirmpassword !== '' &&
            formData.Password !== formData.Confirmpassword
        ) {
            errors.Confirmpassword = 'Password and Confirm Password must be same';
        }







        return errors;

    }

    const Formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Gender: '',
            Email: '',
            MobileNumber: '+91',
            Password: '',
            Confirmpassword: ''
        },

        validate: ValidateUser,

        onSubmit: (user) => {
            console.log(user)
        }
    });


    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <form onSubmit={Formik.handleSubmit} className='alert alert-warning h-75' style={{ paddingLeft: '50px', paddingRight: '50px', overflowY: 'scroll', }}>
                <dl>
                    <dt className='form-label'>User Name</dt>
                    <dd><input onChange={Formik.handleChange} value={Formik.values.UserName} className='form-control' type='text' placeholder='Enter the name' name='UserName'></input></dd>
                    <dd className='text-danger'>{Formik.errors.UserName}</dd>
                    <dt className='form-label'>Age</dt>
                    <dd><input onChange={Formik.handleChange} value={Formik.values.Age} className='form-control' type='number' name='Age'></input></dd>
                    <dd className='text-danger'>{Formik.errors.Age}</dd>
                    <dt className='form-label'>City</dt>
                    <dd>
                        <select name='City' value={Formik.values.City} onChange={Formik.handleChange}>
                            <option value=''>Select City</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Jaipur'>Jaipur</option>
                        </select>
                    </dd>
                    <dd className='text-danger'>{Formik.errors.City}</dd>
                    <dt className='form-label'>Gender</dt>
                    <dd>
                        <input onChange={Formik.handleChange} type='radio' value='Male' name='Gender' checked={Formik.values.Gender === 'Male'}></input>
                        <label>Male</label>
                        <input onChange={Formik.handleChange} type='radio' value='Female' name='Gender' checked={Formik.values.Gender === 'Female'}></input>
                        <label>Female</label>
                    </dd>
                    <dd className='text-danger'>{Formik.errors.Gender}</dd>
                    <dt className='form-label'>Email</dt>
                    <dd><input onChange={Formik.handleChange} value={Formik.values.Email} className='form-control' type='email' placeholder='Enter the email' name='Email'></input></dd>
                    <dd className='text-danger'>{Formik.errors.Email}</dd>
                    <dt className='form-label'>Mobile Number</dt>
                    <dd><input onChange={Formik.handleChange} value={Formik.values.MobileNumber} className='form-control' type='tel' placeholder='Enter the mobile number' name='MobileNumber'></input></dd>
                    <dd className='text-danger'>{Formik.errors.MobileNumber}</dd>
                    <dt className='form-label'>Password</dt>
                    <dd><input onChange={Formik.handleChange} value={Formik.values.Password} className='form-control' type='password'  placeholder='Enter the password' name='Password' onSubmit={Formik.handleSubmit}></input></dd>
                    <dd className='text-danger'>{Formik.errors.Password}</dd>
                    <dt className='form-label'>Confirmpassword</dt>
                    <dd><input onChange={Formik.handleChange} value={Formik.values.Confirmpassword} className='form-control' type='password'  placeholder='Enter the confirm password' name='Confirmpassword'></input></dd>
                    <dd className='text-danger'>{Formik.errors.Confirmpassword}</dd>

                </dl>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default Login_page;