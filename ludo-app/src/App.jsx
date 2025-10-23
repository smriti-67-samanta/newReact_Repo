import { useState } from 'react'
import LandingPage from './components/LandingPage'
import GamePage from './components/GamePage'
import WinnerPage from './components/WinnerPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [gameConfig, setGameConfig] = useState(null)
  const [winner, setWinner] = useState(null)

  const startGame = (config) => {
    setGameConfig(config)
    setCurrentPage('game')
  }

  const endGame = (winnerData) => {
    setWinner(winnerData)
    setCurrentPage('winner')
  }

  const restartGame = () => {
    setGameConfig(null)
    setWinner(null)
    setCurrentPage('landing')
  }

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage onStartGame={startGame} />}
      {currentPage === 'game' && (
        <GamePage 
          gameConfig={gameConfig} 
          onEndGame={endGame} 
          onRestart={restartGame}
        />
      )}
      {currentPage === 'winner' && (
        <WinnerPage winner={winner} onRestart={restartGame} />
      )}
    </div>
  )
}

export default App