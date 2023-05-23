import React from 'react';
import { Typography } from '@mui/material';
import { checkWinner } from '../lib/firebase';

interface Props {
  board: string[];
}

const Winner: React.FC<Props> = ({ board }) => {
  const winner = checkWinner(board);

  if (winner === null) {
    return <Typography variant='h6'>It's a draw!</Typography>;
  }

  return <Typography variant='h5'>{winner} won the game!</Typography>;
};

export default Winner;