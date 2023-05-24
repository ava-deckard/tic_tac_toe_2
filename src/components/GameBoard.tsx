import React from 'react';
import { Grid } from '@mui/material';
import theme from '../lib/theme';

const GameBoard: React.FC = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const handleClick = (index: number) => {
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
  };

  return (
    <Grid container spacing={1}>
      {board.map((value, index) => (
        <Grid item xs={4} key={index} onClick={() => handleClick(index)}>
          <div style={{ border: `1px solid ${theme.palette.primary.main}`, width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {value}
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameBoard;
