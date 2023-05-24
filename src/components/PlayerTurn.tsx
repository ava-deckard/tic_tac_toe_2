import React from 'react';
import { db } from '../lib/firebase';
import { Typography } from '@mui/material';

interface PlayerTurnProps {
  gameId: string;
}

const PlayerTurn: React.FC<PlayerTurnProps> = ({ gameId }) => {
  const [currentPlayer, setCurrentPlayer] = React.useState<string>('');

  React.useEffect(() => {
    const updateCurrentPlayer = (player: string) => {
      setCurrentPlayer(player);
    };

    const unsubscribe = db.collection('games').doc(gameId).onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        updateCurrentPlayer(data?.currentPlayer);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [gameId]);

  return (
    <Typography variant='h4'>
      {currentPlayer ? `${currentPlayer}'s turn` : 'Loading...'}
    </Typography>
  );
};

export default PlayerTurn;