import { IFITMark } from "./validate";

export function getMarks(input: string): IFITMark[] {
  const regex = /\/?;+([a-z0-9]+)(?:=?([a-z0-9_-]+)?)+/g;

  let match = [];
  let item = [];
  while (item = regex.exec(input)) {
    if (item.length <= 0) {
      continue;
    }

    match.push({
      key: item[1],
      value: item[2],
    });
  }

  return match;
}
