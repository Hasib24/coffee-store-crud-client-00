import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='justify-center flex container mx-auto'>
            
            <form className='p-10 border'>
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="text" name="name" id="name" placeholder='Enter name' required />
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="email" name="email" id="email" placeholder='Enter email' required />
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="password" name="password" id="password" placeholder='Password' required/>
                <input className='block border rounded-lg my-4 p-2 w-72 outline-none' type="text" name="photoURL" id="photoURL" placeholder='Photo URL' />
                <span className='block my-2 ml-2'><input className='mr-2' type="checkbox" name="checkbox" id="checkbox" onClick={(event)=>handleTasmsPolicy(event)} /><label htmlFor="checkbox">Accept Terms and Policies</label></span>      
                {/* <input className={!tarmsAndPolices ? `border border-red-600 rounded-lg w-72 py-1 bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-semibold cursor-pointer duration-500` : `border border-blue-600 rounded-lg w-72 py-1 bg-blue-800 hover:bg-white text-white hover:text-blue-800 font-semibold cursor-pointer duration-500` } type="submit" value="Create" disabled={!tarmsAndPolices} /> */}
                {/* <div>
                    <h1 className='text-red-400'>{inputError.length ? inputError : ''}</h1>
                    <h1 className='text-green-600'>{inputSucess.length ? inputSucess : '' }</h1>
                </div> */}
                <p className='my-5'>Already have an account ? <Link to='/signin' className='text-blue-600'>Login</Link> </p>
                <p>
                    <span className='block text-center'>OR</span>
                 
                </p>
            </form>
        </div>
    );
};

export default Register;