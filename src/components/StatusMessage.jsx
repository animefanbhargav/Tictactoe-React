import React from 'react';

function StatusMessage({ winner, current }) {
  const noMovesLeft = current.board.every(el => el != null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `Its a draw`}
    </h2>
  );
}

export default StatusMessage;
