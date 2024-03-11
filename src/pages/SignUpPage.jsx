import React from 'react'
import { FlexBox, PageParent } from '../components/reusables/AllContainers'
import AppLogo from '../components/reusables/AppLogo'
import { Button, TextField, Typography, IconButton, Checkbox } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = () => {

    const navigate = useNavigate()

    return (
        <PageParent>

            <FlexBox justifyContent={'flex-start'} mb={'2rem'}>

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
            <Typography variant='h6' mt={'2rem'}>Create a new account.</Typography>

            <form style={{ width: '85%' }} >

                <FlexBox column sx={{
                    backgroundColor: '#f1f7ff',
                    borderRadius: '.5rem',
                    // width: '70%',
                    padding: '1.5rem',
                    margin: '2rem 0',
                    boxShadow: '0 0 2.5rem #7398ff65'

                }}>
                    <TextField fullWidth label='Email' type='email' placeholder='youremail@example.com' />
                    <FlexBox >
                        <Typography sx={{
                            color: 'var(--text3)',
                            border: '1px solid grey',
                            padding: '1.2rem',
                            margin: '0',
                            height: '100%',
                            borderRadius: '.25rem'
                        }}>+91</Typography>

                        <TextField fullWidth label='Phone' type='number' placeholder='9876 543 210' />
                    </FlexBox>
                    <TextField fullWidth label='Password' type='password' />
                    <TextField fullWidth label='Confirm Password' type='password' />


                </FlexBox>

                <FlexBox alignItems={'flex-start'} mb={'2rem'}>
                    <Checkbox sx={{
                        color: 'var(--color-dark1)'
                    }} />
                    <Typography variant='body2' color='var(--text1)' align='left'>By clicking on the checkbox you agree to the Terms & Condition and Privacy Policy.</Typography>
                </FlexBox>

                <Button type='submit' fullWidth variant='contained' sx={{
                    background: 'linear-gradient(135deg, var(--purple2) -10%, var(--purple3) 90%)'
                }}>Sing Up</Button>
            </form>

            <Typography variant='body2' color={'var(--text1)'} mt={'2rem'}>Already have an account?</Typography>
            <Typography onClick={() => navigate('/login')} sx={{
                cursor: 'pointer'
            }}>&lt;&lt; Go To Login</Typography>

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

export default SignUpPage