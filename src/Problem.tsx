import React from 'react';
import NumberSquare, { NumberSquareProps } from './NumberSquare';

export interface ProblemProps {
  first: number;
  second: number;
  operation: string;
}

function blankLeadingZeros(row: NumberSquareProps[], digits: number) {
  for (let i = 0; i < digits; i++) {
    if (row[i].value !== '0') {
      break;
    }
    row[i].value = '';
  }
}

function Problem(props: ProblemProps) {
  const digits = 4;
  let { first, second } = props;
  const row1: NumberSquareProps[] = [];
  const row2: NumberSquareProps[] = [];
  const colors = ['limegreen', 'red', 'blue'];
  for (let i = 0; i < digits; i++) {
    const color = colors[i % 3];
    row1.push({ value: (first % 10).toString(), color });
    first /= 10;
    first = Math.floor(first);
    row2.push({ value: (second % 10).toString(), color });
    second /= 10;
    second = Math.floor(second);
  }

  row1.reverse();
  row2.reverse();
  blankLeadingZeros(row1, digits);
  blankLeadingZeros(row2, digits);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 5,
        borderColor: 'red',
        borderStyle: 'solid',
        alignSelf: 'left',
        margin: 15,
      }}
    >
      <div style={{ display: 'flex' }}>
        <NumberSquare value="" />

        {row1.map((num) => (
          <NumberSquare {...num} />
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <NumberSquare value={props.operation} />
        {row2.map((num) => (
          <NumberSquare {...num} />
        ))}
      </div>
      <div
        style={{
          borderWidth: 0,
          borderTopWidth: 3,
          borderStyle: 'solid',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <NumberSquare value="" />
        <NumberSquare value="" />
        <NumberSquare value="" />
        <NumberSquare value="" />
        <NumberSquare value="" />
      </div>
    </div>
  );
}

export default Problem;
