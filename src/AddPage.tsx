import React from 'react';

import { ProblemProps } from './Problem';
import PrintPage, { PROBLEMS_PER_PATH } from './PrintPage';
import {generateRandomAddProblem} from './Math';

interface AddPageProps{
  dynamic?: boolean
}

function AddPage(props:AddPageProps) {
  const problems: ProblemProps[] = [];

  for (let i = 0; i < PROBLEMS_PER_PATH; i++) {
    problems.push(generateRandomAddProblem(!!props.dynamic));
  }

  return <PrintPage problems={problems} />;
}

export default AddPage;
