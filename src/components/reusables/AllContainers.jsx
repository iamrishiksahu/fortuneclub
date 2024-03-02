import { Box } from "@mui/material";
import styled from "styled-components";

export const FlexBox = styled(Box)({
  display: "flex",
  width: '100%',
  gap: (props) => props.gap || "1rem",
  flexDirection: (props) => props.column ? "column" : "row",
  alignItems: 'center',
  justifyContent: 'center',
})

export const PageParent = styled(FlexBox,{
  name: 'parent-container'
})({
  flexDirection: 'column',
  padding: (props) => props.padding || '1rem',
  margin: (props) => props.margin || '0px',
})

