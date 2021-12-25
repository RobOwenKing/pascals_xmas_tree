import './App.css';
import { useState } from 'react';

function App() {
  const [tree, setTree] = useState([]);

  const calculateNewRow = (previousRow) => {
    return previousRow.slice(0, previousRow.length - 1)
                      .map((element, index) => { return element + previousRow[index+1] });
  };

  console.log(calculateNewRow([1,1]));
  console.log(calculateNewRow([1,2,1]));
  console.log(calculateNewRow([1,4,6,4,1]));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pascal's Christmas Tree</h1>
      </header>
    </div>
  );
}

export default App;
