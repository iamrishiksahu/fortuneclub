import { FlexBox } from "../../components/reusables/AllContainers";
import { Button, Typography, Box } from "@mui/material";
import { PageParent } from "../../components/reusables/AllContainers";
import styled from "styled-components";
const WinGoMainWindow = ({ multipliers, currentMultiplier, setCurrentMultiplier }) => {
  return (
    <PageParent sx={{
      background: 'linear-gradient(45deg, var(--bg-white2), var(--bg-white3))',
      borderRadius: '1rem',
      padding: '1.5rem',
      gap: '2rem',
    }}>
      <FlexBox sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Button sx={{
            backgroundColor: '#10a115',
            color: 'white',
            fontWeight: '500',
            height: '2.75rem',
            fontSize: '1.1rem',
            width: '8rem',
          }}>Green</Button>
        </Box>
        <Box>
          <Button sx={{
            backgroundColor: 'white',
            color: '#444',
            fontWeight: '500',
            height: '2.75rem',
            fontSize: '1.1rem',
            width: '8rem',
          }}>White</Button>
        </Box>
        <Box>
          <Button sx={{
            backgroundColor: '#c5450e',
            color: 'white',
            fontWeight: '500',
            height: '2.75rem',
            fontSize: '1.1rem',
            width: '8rem',
          }}>Orange</Button>
        </Box>
      </FlexBox>

      <FlexBox sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>

        <img width={'15%'} src="/assets/coins/coin_0.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_1.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_2.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_3.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_4.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_5.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_6.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_7.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_8.png" alt="0" />
        <img width={'15%'} src="/assets/coins/coin_9.png" alt="0" />

      </FlexBox>

      <FlexBox justifyContent={'space-around'} >
        {multipliers.map((item, idx) => {

          const activeStyle = (idx == currentMultiplier) ?
            {
              backgroundColor: 'var(--primary)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              boxShadow: '10px 10px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
            }
            : ''
          return (
            <Typography
              key={idx}
              onClick={() => setCurrentMultiplier(idx)}
              sx={{
                transition: 'all 200ms ease',
                padding: '0.5rem 0px',
                cursor: 'pointer',
                ...activeStyle,
              }}
            >{item}</Typography>
          )
        })}

      </FlexBox>

      <FlexBox sx={{
        gap: '0',
        width: 'auto',
      }}>
        <Button sx={{
          width: '10rem',
          backgroundColor: 'var(--blue3)',
          color: 'var(--text-black)',
          borderRadius: '1rem 0 0 1rem',
          height: '3rem',
          fontSize: '1.125rem',
        boxShadow: '0 5px 1rem #00ffff20',

        }}>
          Bull
        </Button>
        <Button sx={{
          width: '10rem',
          backgroundColor: 'var(--red1)',
          color: 'var(--text-black)',
          borderRadius: '0 1rem 1rem 0',
          height: '3rem',
          fontSize: '1.125rem',
        boxShadow: '0 5px 1rem #00ffff20',

        }}>
          Bear
        </Button>
      </FlexBox>

    </PageParent>)
}

export default WinGoMainWindow

