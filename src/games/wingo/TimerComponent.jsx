import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

const TimerComponent = ({ duration }) => {

  // duration is in seconds
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    const countDownInteraval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prev => prev - 1);
      }
    }, 1000)

    return () => clearInterval(countDownInteraval)
  })

  const formattedTime = `${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`

  return (<>
    <Typography variant="h4" sx={{
      background: 'linear-gradient(135deg, var(--bg-white2), var(--bg-white3))',
      padding: '0.25rem 1rem',
      borderRadius: '1rem 0 1rem 0',
      width: '8.5rem',
      letterSpacing: '3px'

    }}>
      {formattedTime}
    </Typography>
  </>)
}
export default TimerComponent  