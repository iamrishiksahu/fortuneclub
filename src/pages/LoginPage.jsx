import React from 'react'
import { FlexBox, PageParent } from '../components/reusables/AllContainers'
import AppLogo from '../components/reusables/AppLogo'
import { Button, TextField, Typography, IconButton } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <PageParent>

      <FlexBox justifyContent={'flex-start'} mb={'3rem'}>

        <IconButton onClick={() => navigate('/')}
          sx={{
            fontSize: '1.25rem',
            color: 'var(--text-black)',
            display: 'flex',
            gap: '1rem',
          }}>
          <i class="bi bi-chevron-left"></i>
          <Typography>Go Back</Typography>
        </IconButton>

      </FlexBox>

      <AppLogo width={'200px'} />
      <Typography variant='h6' mt={'3rem'} mb={'1rem'}>Login to your account.</Typography>

      <form >

        <FlexBox column sx={{
          backgroundColor: '#f1f7ff',
          borderRadius: '.5rem',
          // width: '70%',
          padding: '1.5rem',
          margin: '2rem 0',
          boxShadow: '0 0 2.5rem #7398ff65'

        }}>
          <TextField label='Email' type='email' />
          <TextField label='Password' type='password' />

        </FlexBox>
        <Typography color={'var(--text4)'} mb={'2rem'}>Forgot Password?</Typography>

        <Button type='submit' fullWidth variant='contained' sx={{
          background: 'var(--button-purple-gradient1)'
        }}>Login</Button>
      </form>

      <Typography variant='body2' color={'var(--text1)'} mt={'2rem'}>Don't have account?</Typography>
      <Typography onClick={() => navigate('/signup')} sx={{
        cursor: 'pointer'
      }}>Create New Account</Typography>

      <img src='/assets/common/customer-service-icon.png' 
      style={{
        position: 'fixed',
        right: '2rem',
        bottom: '2rem',
        width: '5rem',
        height: '5rem',
        padding: '1rem',
        background: 'var(--purple4)',
        borderRadius: '1.25rem',
      }} />


    </PageParent>
  )
}

export default LoginPage