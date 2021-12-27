import { useEffect, useState } from 'react';

const Row = ({ values, highlightTest, highlightFactor }) => {
  const entries = values.map((value, index) => {
    if (highlightTest.test.call(this, value, highlightFactor)) {
      return <strong className="entry true" key={index}>{value}</strong>;
    } else {
      return <span className="entry false" key={index}>{value}</span>
    }
  })

  return (
    <div>
      {entries}
    </div>
  );
}

export default Row;
