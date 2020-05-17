import React from 'react';
import Problem, { ProblemProps } from './Problem';

export interface PrintPageProps {
  problems: ProblemProps[];
}

export const PROBLEMS_PER_PATH = 8;

function PrintPage(props: PrintPageProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        flexWrap: 'wrap',
        pageBreakAfter: 'always',
      }}
    >
      {props.problems.map((_) => (
        <Problem {..._} />
      ))}
    </div>
  );
}

export default PrintPage;
