import { useRef } from 'react';

export default function Scoreboard() {
    // const currentScore = useRef(0);
    // const bestScore = useRef(0);
    const gameState = {
                        currentScore: useRef(0),
                        bestScore: useRef(0)
                    }

    return (
        <div className="scoreboard">
            <p>Test</p>
            <p>Current Score: {gameState.currentScore.current}</p>
            <p>Best Score: {gameState.bestScore.current}</p>
        </div>
    );
}