import { IconButton } from "@mui/material"

const TopBarComp = ({ hideBackButton }) => {
  return (
    <>
      <div className="topBarComp">
        {!hideBackButton ? 
        <>
        <IconButton onClick={() => window.history.back()}>
          <i className="fa fa-arrow-left"></i>
          <IconButton>
      </> : null}</div>
    </>
  );
};

export default TopBarComp;
