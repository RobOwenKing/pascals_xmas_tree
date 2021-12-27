import './App.css';
import { useEffect, useState } from 'react';

import Row from './components/Row.jsx';

import { rowTestOptions, highlightTestOptions } from './helpers/booleanTestOptions.js';

import useInput from './hooks/useInput.js';

const App = () => {
  const [tree, setTree] = useState([]);
  const fontSizeInPixels = useInput('number', 16);
  const numberOfRows = useInput('number', 10);
  const [colourScheme, setColourScheme] = useState('colours-xmas');

  const rowOption = useInput('', rowTestOptions[0].value);
  const [rowTest, setRowTest] = useState(rowTestOptions[0]);
  const rowMultipleFactor = useInput('number', 3);

  const highlightOption = useInput('', highlightTestOptions[0].value);
  const [highlightTest, setHighlightTest] = useState(highlightTestOptions[0]);
  const highlightFactor = useInput('number', 2);

  const [treeStyle, setTreeStyle] = useState({ fontSize: 16 });

  const calculateNewRow = (previousRow) => {
    return previousRow.slice(0, previousRow.length - 1)
                      .map((element, index) => { return element + previousRow[index+1] });
  };

  const generateTree = () => {
    const returnable = [];

    let newRow = [1];

    for (let i = 0; i < numberOfRows.value; i++) {
      returnable.push(newRow);

      if (rowTest.test.call(this, i, rowMultipleFactor.value)) {
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
  }, [numberOfRows.value, rowTest, rowMultipleFactor.value]);

  useEffect(() => {
    setTreeStyle({ fontSize: fontSizeInPixels.value + 'px' });
  }, [fontSizeInPixels.value]);

  const onColourSchemeChange = (event) => {
    setColourScheme(event.target.value);
  };

  const rows = tree.map((row, index) =>
    <Row values={row} key={index} highlightTest={highlightTest} highlightFactor={highlightFactor.value} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pascal's Christmas Tree</h1>
      </header>
      <article>
        <form>
          <div>
            <div>
              <label htmlFor="rows">Number of Rows:</label>
              <input id="rows" {...numberOfRows} min="1" />
            </div>
            <div>
              <label htmlFor="row-option">Prune rows after...</label>
              <select id="row-option" {...rowOption}>
                { rowTestOptions.map((opt, index) => {
                  return <option key={index} value={opt.value}>{opt.label}</option>
                }) }
              </select>
              { rowTest.value === 'multiples' &&
                <input {...rowMultipleFactor} min="2" /> }
            </div>
            <div>
              <label htmlFor="highlight-option">Highlight...</label>
              <select id="highlight-option" {...highlightOption}>
                { highlightTestOptions.map((opt, index) => {
                  return <option key={index} value={opt.value}>{opt.label}</option>
                }) }
              </select>
              { highlightTest.value === 'multiples' &&
                <input {...highlightFactor} min="2" /> }
            </div>
          </div>
          <div>
            <fieldset>
              <legend>Colour scheme:</legend>
              <label className="colours-xmas">
                <input type="radio" name="colours" value="colours-xmas"
                       checked={colourScheme === 'colours-xmas'}
                       onChange={onColourSchemeChange} />
                <span className="false">Christmas</span> <span className="true">Tree</span>
              </label>
              <label className="colours-icefire">
                <input type="radio" name="colours" value="colours-icefire"
                       checked={colourScheme === 'colours-icefire'}
                       onChange={onColourSchemeChange} />
                <span className="false">Ice</span> and <span className="true">Fire</span>
              </label>
            </fieldset>
            <div>
              <label htmlFor="font-size">Font size:</label>
              <input id="font-size" {...fontSizeInPixels} min="1" max="20" />
            </div>
          </div>
        </form>
        <div className={colourScheme} style={treeStyle}>
          { rows }
        </div>
      </article>
    </div>
  );
}

export default App;
