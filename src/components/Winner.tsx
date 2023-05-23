import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useFirestore } from 'src/lib/firebase';

const Winner: React.FC = () => {
  const { db } = useFirestore();
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    const fetchWinner = async () => {
      const winnerRef = db.collection('winners').orderBy('timestamp', 'desc').limit(1);
      const winnerSnapshot = await winnerRef.get();
      winnerSnapshot.forEach(doc => setWinner(doc.data().name));
    };

    fetchWinner();
  }, [db]);

  return (
    <Box>
      <Typography variant="h4">Winner:</Typography>
      {winner ? <Typography variant="h5">{winner}</Typography> : <Typography variant="h5">No winner yet</Typography>}
    </Box>
  );
};

export default Winner;
