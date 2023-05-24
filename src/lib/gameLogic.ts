export function checkGameOver(board: string[][]): string | null {\n  const lines = [\n    [board[0][0], board[0][1], board[0][2]],\n    [board[1][0], board[1][1], board[1][2]],\n    [board[2][0], board[2][1], board[2][2]],\n    [board[0][0], board[1][0], board[2][0]],\n    [board[0][1], board[1][1], board[2][1]],\n    [board[0][2], board[1][2], board[2][2]],\n    [board[0][0], board[1][1], board[2][2]],\n    [board[0][2], board[1][1], board[2][0]],\n  ];\n\n  for (const line of lines) {\n    if (line[0] && line[0] === line[1] && line[0] === line[2]) {\n      return line[0];\n    }\n  }\n\n  if (board.every(row => row.every(cell => cell !== ''))) {\n    return 'draw';\n  }\n\n  return null;\n}\n\nexport function handlePlayerMove(board: string[][], row: number, col: number, player: string): string[][] {\n  // Update the board with the player's move\n}\n\nexport function initGameState(): string[][] {\n  // Initialize the game board with empty cells\n}\nexport function handlePlayerMove(board: string[][], row: number, col: number, player: string): string[][] {\n  if (board[row][col] === '') {\n    board[row][col] = player;\n  }\n  return board;\n}\n\nexport function initGameState(): string[][] {\n  // Initialize the game board with empty cells\n}\nexport function initGameState(): string[][] {\\n  const board = [[\'\', \'\', \'\'], [\'\', \'\', \'\'], [\'\', \'\', \'\']];\\n  return board;\\n}\\n