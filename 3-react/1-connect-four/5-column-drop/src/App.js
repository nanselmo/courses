import "./styles.css";

export default function App() {
  const [chips, changeChips] = useState([]);
  const [playerTurn, changePlayerTurn] = useState('red');

  function togglePlayerTurn() {
    if (playerTurn === 'red') {
      changePlayerTurn('yellow');
    } else {
      changePlayerTurn('red');
    }
  }
  function addChips() {
	if (chips.length < 6) {
	  changeChips([...chips, playerTurn]);
	}
	togglePlayerTurn();
  }

  return (
    <div className="App">
      <div className="blue" onClick={addChips}>
	    <div className="slot" className={chips[5]}></div>
	    <div className="slot" className={chips[4]}></div>
	    <div className="slot" className={chips[3]}></div>
	    <div className="slot" className={chips[2]}></div>
	    <div className="slot" className={chips[1]}></div>
	    <div className="slot" className={chips[0]}></div>
      </div>
      It is player {playerTurn}'s turn
    </div>
  );
}