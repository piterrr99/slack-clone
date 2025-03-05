import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../views/HomeScreen'
import { LoginScreen } from '../views/LoginScreen'
import PrivateRoutes from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { useDispatch } from 'react-redux'
import { authLogin } from '../store/auth/authSlice'

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('user_info'));
      if(userInfo) {
        dispatch(authLogin(userInfo));
      }
    }, [dispatch])
    
  return (
    <BrowserRouter>
    
        <Routes>
            
            <Route path='/' element=
                {   
                    <PrivateRoutes>
                        <HomeScreen /> 
                    </PrivateRoutes> 
                } 
            />
            
            <Route path='/login' element=
                { 
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes> 
                } 
            />
            
            <Route path='/*' element={ <Navigate to='/' /> } />

        </Routes>
    
    </BrowserRouter>
  )
}
