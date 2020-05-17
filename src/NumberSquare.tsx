import React from 'react';

export interface NumberSquareProps {
  value: string;
  color?: string;
}

function NumberSquare(props: NumberSquareProps) {
  const additionalProps: Partial<NumberSquareProps> = {};
  if (props.color) {
    additionalProps.color = props.color;
  }

  return (
    <div
      style={{
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        fontSize: '45px',
        ...additionalProps,
      }}
    >
      {props.value}
    </div>
  );
}

export default NumberSquare;
