import React, { useEffect, useState } from "react";
import { Box, Loader, getTheme } from "styled-minimal";

const Child = ({ color = "yellow", duration = 1000, renderNext }) => {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const { colors } = getTheme();

  useEffect(() => {
    setTimeout(() => {
      setBackgroundColor(color);
      renderNext();
    }, duration);
  }, []);

  return (
    <Box
      alignItems="center"
      bg={backgroundColor}
      border={`2px solid ${colors[color]}`}
      borderRadius="8px"
      display="flex"
      height={128}
      justifyContent="center"
    >
      <Loader color={colors[color]} size={48} />
    </Box>
  );
};

export default Child;
