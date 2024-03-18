import React from 'react'
import { FlexBox } from '../../components/reusables/AllContainers'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const HomeNav = () => {

    const navigate = useNavigate()

    return (
        <FlexBox sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: '1000',
            padding: '0.5rem 0',
            backgroundColor: 'var(--bg-white)',
        }}>
            {/* LEFT */}
            <FlexBox sx={{
                justifyContent: 'flex-start'
            }}>
                <i class="bi bi-list" style={{ fontSize: '2rem' }}></i>

                <img src="/assets/common/app_logo.png" width={'124px'} />

            </FlexBox>
            <Button onClick={() => navigate('/login')} variant="contained" sx={{
                background: 'var(--button-purple-gradient1)',
                padding: '.375rem 2rem'
            }}>
                Login
            </Button>
        </FlexBox>

    )
}

export default HomeNav