import { useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { CustomComponent } from './custom-component'

export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <Box
        component="h1"
        textAlign="center"
        sx={{
          fontSize: { xs: 32, md: 48 },
          fontWeight: 'bold',
          color: 'orange',
          mt: 5,
        }}
      >
        Welcome to the Store
      </Box>

      <Button variant="contained" color="success" onClick={() => setCount(count + 1)}>
        Click Me {count}
      </Button>
      <CustomComponent> </CustomComponent>
    </div>
  );
}