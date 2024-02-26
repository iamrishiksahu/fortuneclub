import { Box } from "@mui/material";

export const FlexBox = ({ children, column, gap }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: gap || "1rem",
        flexDirection: column ? "column" : "row",
      }}
    >
      {children}
    </Box>
  );
};
