import React from 'react';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Tic Tac Toe Game</h1>
    </div>
  );
};

export default Home;
import React from 'react';\nimport { makeStyles } from '@mui/material/styles';\nimport GameBoard from '../components/GameBoard';\n\nconst useStyles = makeStyles(() => ({\n  container: {\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n}));\n\nconst Home: React.FC = () => {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.container}>\n      <h1>Tic Tac Toe Game</h1>\n      <GameBoard />\n    </div>\n  );\n};\n\nexport default Home;\n