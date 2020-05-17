import React from 'react';

import { ProblemProps } from './Problem';
import PrintPage, { PROBLEMS_PER_PATH } from './PrintPage';
import { generateRandomSubtractProblem } from './Math';

interface SubtractPageProps {
  dynamic?: boolean;
}

function SubtractPage(props: SubtractPageProps) {
  const problems: ProblemProps[] = [];

  for (let i = 0; i < PROBLEMS_PER_PATH; i++) {
    problems.push(generateRandomSubtractProblem(!!props.dynamic));
  }

  return <PrintPage problems={problems} />;
}

export default SubtractPage;
