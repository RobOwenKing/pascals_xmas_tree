import './App.css';
import { useEffect, useState } from 'react';

import Row from './components/Row.jsx';

import useInput from './hooks/useInput.js';

const App = () => {
  const [tree, setTree] = useState([]);
  const numberOfRows = useInput('number', 10);

  const calculateNewRow = (previousRow) => {
    return previousRow.slice(0, previousRow.length - 1)
                      .map((element, index) => { return element + previousRow[index+1] });
  };

  const generateTree = () => {
    const returnable = [];

    let newRow = [1];

    for (let i = 0; i < numberOfRows.value; i++) {
      returnable.push(newRow);

      newRow = [1, ...calculateNewRow(newRow), 1];
    }

    return returnable;
  };

  useEffect(() => {
    setTree(generateTree());
  }, [numberOfRows.value]);

  const rows = tree.map((row, index) =>
    <Row values={row} key={index} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pascal's Christmas Tree</h1>
      </header>
      <article>
        <form>
          <label htmlFor="rows">Number of Rows:</label>
          <input id="rows" {...numberOfRows} min="1" />
        </form>
        { rows }
      </article>
    </div>
  );
}

export default App;
