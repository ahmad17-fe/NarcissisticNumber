export function narcissistic(value: number): boolean {
  const arrValue: Array<number> = [];
  let sum: number = 0;

  value
    .toString()
    .split("")
    .forEach((val) => {
      arrValue.push(Number(val));
    });

  for (const number of arrValue) {
    sum += number ** arrValue.length;
  }

  const result: boolean = sum === value;

  return result;
}
