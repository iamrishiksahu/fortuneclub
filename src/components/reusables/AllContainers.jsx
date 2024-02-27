import { Box } from "@mui/material";

export const PageParent = ({ children, padding, margin, sx }) => {
  return (
    <FlexBox column sx={{
      width: '100%',
      padding: padding || '1rem',
      margin: margin || '0px',
      ...sx
    }}>
      {children}
    </FlexBox>
  )
}

export const FlexBox = ({ children, column, gap, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: gap || "1rem",
        flexDirection: column ? "column" : "row",
        alignItems: 'center',
        justifyContent: 'center',
        ...sx
      }}
    >
      {children}
    </Box>
  );
};
