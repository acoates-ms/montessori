import { ProblemProps } from './Problem';

function random1000sNumber() {
  return Math.floor(Math.random() * 10000);
}

export function generateRandomAddProblem(dynamic: boolean): ProblemProps {
  while (true) {
    const first = random1000sNumber();
    const second = random1000sNumber();

    if (!dynamic) {
      const digits = 4;
      const row1 = extractNumbers(first, digits);
      const row2 = extractNumbers(second, digits);

      if (row1.some((num, index) => num + row2[index] > 9)) {
        continue;
      }
    }

    return { first, second, operation: '+' };
  }
}

export function generateRandomSubtractProblem(dynamic: boolean): ProblemProps {
  let first = 0,
    second = 0;
  while (true) {
    first = random1000sNumber();
    second = random1000sNumber();

    if (!dynamic) {
      const digits = 4;
      const row1 = extractNumbers(first, digits);
      const row2 = extractNumbers(second, digits);

      if (row1.some((num, index) => num - row2[index] < 0)) {
        continue;
      }
    }

    if (first > second) {
      break;
    }
  }
  return { first, second, operation: '-' };
}

export function extractNumbers(num: number, digits: number): number[] {
  const row: number[] = [];
  for (let i = 0; i < digits; i++) {
    row.push(num % 10);
    num /= 10;
  }
  return row;
}
