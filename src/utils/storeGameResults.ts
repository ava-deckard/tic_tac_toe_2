import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

interface GameResult {
  winner: string | null;
  board: (string | null)[];
  timestamp: number;
}

const storeGameResults = async (result: GameResult) => {
  try {
    const gameResultsCollection = collection(db, 'gameResults');
    await addDoc(gameResultsCollection, result);
  } catch (error) {
    console.error('Error storing game result:', error);
  }
};

export default storeGameResults;
