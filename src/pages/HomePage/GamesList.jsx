import React from 'react'
import { FlexBox } from '../../components/reusables/AllContainers'
import { Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const GamesList = () => {
  const navigate = useNavigate()
  return (
    <FlexBox column gap={'3rem'}>
      <FlexBox column
        onClick={() => navigate('/games/win-go')}

        sx={{
          borderRadius: '1rem',
          background: 'linear-gradient(45deg, var(--bg-white), var(--bg-white2))',
          background: 'linear-gradient(45deg, var(--bg-white2), var(--bg-white3))',
          // background: 'linear-gradient(45deg, var(--red1), var(--purple4))',

          // background: 'linear-gradient(45deg, #ffe5e5, #9ebdfd)',
          padding: '2rem',
          // boxShadow: '0 0 15px rgba(224, 238, 255, 0.2)',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '20rem',
          height: '20rem',
          // aspectRatio: '1/1',
          position: 'relative',
          transition: 'all 200ms ease',
          '&:hover': {
            transform: 'scale(1.04)'
          }
          // cursor: 'pointer'
        }}>

        <FlexBox justifyContent={'space-between'}>

          <img src="/assets/common/WinGO_title.png"
            width={'90px'}
            style={{
              backgroundColor: 'var(--blue3)',
              padding: '0.5rem 1rem',
              borderRadius: '.5rem'
            }} />
          <Typography
            variant="body2"
            sx={{
              borderRadius: '0.5rem',
              padding: '0.25rem .5rem',
              backgroundColor: 'var(--purple1)',

            }}>New Launch!</Typography>
        </FlexBox>

        <img style={{
          width: '80%',
          opacity: '0.5',
          position: 'absolute',
          top: '5rem',
          zIndex: '0'
        }} src="/assets/common/line-chart-demo.png" />
        <FlexBox>

          <img width={'12%'} style={{ zIndex: 2 }} src="/assets/coins/coin_7.png" alt="0" />
          <img width={'15%'} style={{ zIndex: 2, marginTop: '5rem' }} src="/assets/coins/coin_6.png" alt="0" />
          <img width={'10%'} style={{ zIndex: 2, marginTop: '-5rem' }} src="/assets/coins/coin_0.png" alt="0" />
          <img width={'10%'} style={{ zIndex: 2, marginTop: '6rem' }} src="/assets/coins/coin_8.png" alt="0" />
          <img width={'13%'} style={{ zIndex: 2, marginTop: '2rem' }} src="/assets/coins/coin_3.png" alt="0" />
        </FlexBox>

        <FlexBox justifyContent={'flex-end'}>

          <Button variant="outlined" sx={{
            borderColor: 'var(--yellow-1)',
            color: 'var(--yellow-1)'
          }}>Play Now!</Button>

        </FlexBox>

      </FlexBox>

      <FlexBox column
        // onClick={() => navigate('/games/aviator')}

        sx={{
          borderRadius: '1rem',
          backgroundImage: 'url("/assets/games/aviator_bg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          padding: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '20rem',
          height: '20rem',
          // aspectRatio: '1/1',
          position: 'relative',
          transition: 'all 200ms ease',
          '&:hover': {
            transform: 'scale(1.04)'
          }
          // cursor: 'pointer'
        }}>

        <FlexBox justifyContent={'flex-start'}>


          <Typography
            variant="body2"
            sx={{
              borderRadius: '0.5rem',
              padding: '0.25rem .5rem',
              backgroundColor: 'var(--purple1)',

            }}>Coming Soon!</Typography>
        </FlexBox>

        <FlexBox justifyContent={'flex-end'}>

          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>Play Now!</Button>

        </FlexBox>

      </FlexBox>

    </FlexBox>
  )
}

export default GamesList