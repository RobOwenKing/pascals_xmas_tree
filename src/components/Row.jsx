import { useEffect, useState } from 'react';

const Row = ({ values }) => {
  const entries = values.map((value, index) => {
    if (value % 2 == 0) {
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
