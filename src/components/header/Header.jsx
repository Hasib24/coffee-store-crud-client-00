import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/more/20.png'
import { AuthContext } from '../../provider/AuthContextProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='py-5 border flex justify-between items-center px-10'>
            <div> <img src={Logo} alt="" /></div>
            <nav className='text-2xl'>
                <NavLink className='p-1'>Home</NavLink>
                <NavLink className='p-1' to={'/coffees'}>Coffees</NavLink>

                {user ? <>
                    <NavLink className='p-1' to={'/addcoffee'}>Add coffee</NavLink>
                    <NavLink className='p-1' to={'logout'}>Logout</NavLink>
                </>
                : 
                    <NavLink className='p-1' to={'/signin'}>SignIn</NavLink>

                }

            </nav>
        </div>
    );
};

export default Header;