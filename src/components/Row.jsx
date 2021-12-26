import { useEffect, useState } from 'react';

const Row = ({ values, highlightTest }) => {
  const entries = values.map((value, index) => {
    if (highlightTest.test.call(this, value)) {
      return <span className="entry red" key={index}>{value}</span>;
    } else {
      return <span className="entry green" key={index}>{value}</span>
    }
  })

  return (
    <div>
      {entries}
    </div>
  );
}

export default Row;
