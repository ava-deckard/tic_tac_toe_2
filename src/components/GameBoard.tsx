import React, { useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1px',
    backgroundColor: 'black',
  },
  cell: {
    backgroundColor: 'white',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
}));

const GameBoard: React.FC = () => {
  const classes = useStyles();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleClick = (index: number) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  return (
    <Box className={classes.container}>
      {board.map((cell, index) => (
        <Button
          key={index}
          className={classes.cell}
          onClick={() => handleClick(index)}
        >
          {cell}
        </Button>
      ))}
    </Box>
  );
};

export default GameBoard;
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import storeGameResults from '../utils/storeGameResults';

const useStyles = makeStyles(() => ({
  /* Existing styles */
}));

const GameBoard: React.FC = () => {
  /* Existing state variables and functions */

  const checkWinner = (board: (string | null)[]): string | null => {
    /* Check for winner logic */
  };

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      storeGameResults({
        winner,
        board,
        timestamp: Date.now(),
      });
    }
  }, [board]);

  /* Existing return statement */
};

export default GameBoard;
