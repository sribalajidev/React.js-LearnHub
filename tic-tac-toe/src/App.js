import './components/Base/Base.scss';
import Player from './components/Player/Player';


function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialname="Player 1" symbol="X" />
          <Player initialname="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  )
}

export default App