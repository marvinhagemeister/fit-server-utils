import { IFITMark } from "./mark";

export function getMarks(input: string): IFITMark[] {
  const regex = /\/?;+([a-z0-9]+)(?:=?([a-z0-9_-]+)?)+/g;

  let match: IFITMark[] = [];
  let item: string[] = [];
  /* tslint:disable no-conditional-assignment  */
  while (item = regex.exec(input)) {
    /* tslint:enable no-conditional-assignment  */
    if (item.length <= 0) {
      continue;
    }

    match.push({
      key: item[1],
      value: typeof item[2] === "undefined" ? null : item[2],
    });
  }

  return match;
}
