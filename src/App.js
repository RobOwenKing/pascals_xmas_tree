import './App.css';
import { useEffect, useState } from 'react';

import Row from './components/Row.jsx';

import { rowTestOptions, highlightTestOptions } from './helpers/booleanTestOptions.js';

import useInput from './hooks/useInput.js';

const App = () => {
  const [tree, setTree] = useState([]);
  const numberOfRows = useInput('number', 10);

  const rowOption = useInput('', rowTestOptions[0].value);
  const [rowTest, setRowTest] = useState(rowTestOptions[0]);

  const highlightOption = useInput('', highlightTestOptions[0].value);
  const [highlightTest, setHighlightTest] = useState(highlightTestOptions[0]);

  const calculateNewRow = (previousRow) => {
    return previousRow.slice(0, previousRow.length - 1)
                      .map((element, index) => { return element + previousRow[index+1] });
  };

  const generateTree = () => {
    const returnable = [];

    let newRow = [1];

    for (let i = 0; i < numberOfRows.value; i++) {
      returnable.push(newRow);

      if (rowTest.test.call(this, i)) {
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
    setRowTest(rowTestOptions.find((element) => element.value === rowOption.value));
  }, [rowOption.value]);

  useEffect(() => {
    setHighlightTest(highlightTestOptions.find((element) => element.value === highlightOption.value));
  }, [highlightOption.value]);

  useEffect(() => {
    setTree(generateTree());
  }, [numberOfRows.value, rowTest]);

  const rows = tree.map((row, index) =>
    <Row values={row} key={index} highlightTest={highlightTest} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pascal's Christmas Tree</h1>
      </header>
      <article>
        <form>
          <div>
            <label htmlFor="rows">Number of Rows:</label>
            <input id="rows" {...numberOfRows} min="1" />
          </div>
          <div>
            <label htmlFor="row-test">Prune rows after...</label>
            <select id="row-test" {...rowOption}>
              { rowTestOptions.map((opt, index) => {
                return <option key={index} value={opt.value}>{opt.label}</option>
              }) }
            </select>
          </div>
        </form>
        { rows }
      </article>
    </div>
  );
}

export default App;
