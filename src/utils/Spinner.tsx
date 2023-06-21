import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';

interface props {
  size: number;
}

const Spinner = ({ size }: props) => {
  function FacebookCircularProgress(props: CircularProgressProps) {
    return (
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            mt: 1,
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={size}
          thickness={4}
          {...props}
          value={100}
        />
      </Box>
    );
  }
  return <FacebookCircularProgress />;
};

export default Spinner;
