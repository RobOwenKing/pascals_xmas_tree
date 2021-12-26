import './App.css';
import { useEffect, useState } from 'react';

import Row from './components/Row.jsx';

import { rowTestOptions } from './helpers/booleanTestOptions.js';

import useInput from './hooks/useInput.js';

const App = () => {
  const [tree, setTree] = useState([]);
  const numberOfRows = useInput('number', 10);
  const rowTest = useInput('', rowTestOptions[0].value);

  const calculateNewRow = (previousRow) => {
    return previousRow.slice(0, previousRow.length - 1)
                      .map((element, index) => { return element + previousRow[index+1] });
  };

  const generateTree = () => {
    const returnable = [];
    const test = rowTestOptions.find((element) => element.value === rowTest.value).test;

    let newRow = [1];

    for (let i = 0; i < numberOfRows.value; i++) {
      returnable.push(newRow);

      if (test.call(this, i)) {
        newRow = calculateNewRow(newRow);
      } else {
        const start = newRow[0];
        const end = newRow[newRow.length - 1];
        newRow = [start, ...calculateNewRow(newRow), end];
      }
    }

    return returnable;
  };

  useEffect(() => {
    setTree(generateTree());
  }, [numberOfRows.value, rowTest.value]);

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

          <label htmlFor="row-test">Prune rows when:</label>
          <select id="row-test" {...rowTest}>
            { rowTestOptions.map((opt, index) => {
              return <option key={index} value={opt.value}>{opt.label}</option>
            }) }
          </select>
        </form>
        { rows }
      </article>
    </div>
  );
}

export default App;
