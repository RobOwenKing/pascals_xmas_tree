import './App.css';
import { useState } from 'react';

function App() {
  const [tree, setTree] = useState([]);
  const [numberOfRows, setNumberOfRows] = useState(10);

  const calculateNewRow = (previousRow) => {
    return previousRow.slice(0, previousRow.length - 1)
                      .map((element, index) => { return element + previousRow[index+1] });
  };

  const generateTree = () => {
    const returnable = [];

    let newRow = [1];

    for (let i = 0; i < numberOfRows; i++) {
      returnable.push(newRow);

      newRow = [1, ...calculateNewRow(newRow), 1];
    }

    return returnable;
  };

  console.log(generateTree());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pascal's Christmas Tree</h1>
      </header>
    </div>
  );
}

export default App;
