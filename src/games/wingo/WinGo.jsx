import React, { useState } from "react";
import { FlexBox, PageParent } from "../../components/reusables/AllContainers";
import { Button, IconButton, Typography } from "@mui/material";
import FundsWidget from "../../components/layouts/FundsWidget";
import WinGoMainWindow from "./WinGoMainWindow";
import TimerComponent from "./TimerComponent";
import styled from "styled-components";

const WinGo = () => {

  const timeframes = ['1 Min', '3 Min', '5 Min', '10 Min'];
  const multipliers = ['X1', 'X2', 'X5', 'X10', 'X20', 'X50', 'X100'];
  const [currentTimeFrame, setCurrentTimeframe] = useState(0);
  const [currentMultiplier, setCurrentMultiplier] = useState(0);

  const [winnersHitory, setWinnersHistory] = useState([1, 2, 4, 5, 6, 7, 8, 9]);

  return (
    <PageParent>

      {/* TOP BAR */}
      <FlexBox position={'relative'} padding={"0.25rem 0rem"}>
        <IconButton sx={{ position: 'absolute', left: '0', fontSize: '1.25rem', color: 'var(--text-black)' }}>
          <i class="bi bi-chevron-left"></i>
        </IconButton>
        <FlexBox>
          <img height={"14px"} src="/assets/common/WinGO_title.png" />
        </FlexBox>
      </FlexBox>

      {/* FUNDS */}
      <FundsWidget />

      {/* TIMER */}
      <FlexBox sx={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 1rem',
      }}>

        <FlexBox column sx={{
          alignItems: 'flex-start'
        }}>
          <Typography color={"var(--text4)"}>Time Duration</Typography>

          <FlexBox sx={{
            alignItems: 'flex-start',
            backgroundColor: 'var(--bg-white3)',
            padding: '0.55rem 1rem',
            justifyContent: 'space-around',
            borderRadius: '1rem 0 1rem 0',
            gap: '0px',
          }}>
            {timeframes.map((item, idx) => {
              return (
                <TimeFrameItem
                  key={idx}
                  onClick={() => setCurrentTimeframe(idx)}
                  sx={{
                    backgroundColor: currentTimeFrame == idx ? 'var(--primary)' : '',
                    color: currentTimeFrame == idx ? 'white' : '',
                    transition: 'all 200ms ease'
                  }}>{item}</TimeFrameItem>
              )
            })}
          </FlexBox>
        </FlexBox>

        <FlexBox column width={'35%'} alignItems={'flex-end'}>
          <Typography color={"var(--text4)"}>Time Remaining</Typography>
          <TimerComponent duration={600} />
        </FlexBox>
      </FlexBox>

      {/* MAIN WINDOW */}
      <FlexBox marginTop={'1rem'}>
        <Typography sx={{
          backgroundColor: 'var(--bg-white2)',
          color: 'var(--text1)',
          padding: '0.25rem 1rem',
          borderRadius: '.5rem .5rem 0 0',
          marginBottom: '-1rem'
        }}>Round Number: {Date.now().toString()}</Typography>

      </FlexBox>
      <WinGoMainWindow multipliers={multipliers} currentMultiplier={currentMultiplier} setCurrentMultiplier={setCurrentMultiplier} />

      {/* HISTORICAL DATA TABLE */}
    </PageParent>
  );
};

export default WinGo;

const TimeFrameItem = styled(Typography)({
  color: 'orange',
  padding: '.25rem .5rem',
  borderRadius: '.5rem',
})



