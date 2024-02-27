import React from "react";
import { FlexBox } from "../../components/reusables/AllContainers";
import { Typography } from "@mui/material";
import FundsWidget from "../../components/layouts/FundsWidget";

const WinGo = () => {
  return (
    <FlexBox column>

      {/* TOP BAR */}
      <FlexBox>
        <p>Back</p>
        <FlexBox>
          <Typography>WinGo</Typography>
        </FlexBox>
      </FlexBox>

      {/* FUNDS */}
      <FundsWidget/>
      
    </FlexBox>
  );
};

export default WinGo;
