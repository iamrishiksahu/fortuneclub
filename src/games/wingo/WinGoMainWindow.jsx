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

        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />
        <img width={'15%'} src="https://damangames.in/assets/png/n0-f810bf6d.png" alt="0" />

      </FlexBox>

      <FlexBox justifyContent={'space-around'} >
        {multipliers.map((item, idx) => {

          const activeStyle = (idx == currentMultiplier) ?
            {
              backgroundColor: 'var(--primary)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              boxShadow: '10px 10px 10px rgba(0,0,0,0.1)'
            }
            : ''
          return (
            <Typography
              key={idx}
              onClick={() => setCurrentMultiplier(idx)}
              sx={{
                transition: 'all 200ms ease',
                padding: '0.5rem 0px',
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

