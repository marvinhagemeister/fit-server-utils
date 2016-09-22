import { IFITMark } from "./mark";
import { getMarks } from "./parse";

export function updateMark(input: string, mark: IFITMark): string {
  let existing = getMarks(input);
  const hadMarks = existing.length > 0;

  let found = false;
  for (let i = 0; i < existing.length; i++) {
    if (existing[i].key === mark.key) {
      found = true;
      existing[i].value = mark.value;
      break;
    }
  }

  if (!found) {
    existing.push(mark);
  }

  let markStr = existing.reduce((prev, curr) => prev + markToString(curr), "");

  if (hadMarks) {
    const match = input.match(/(?:\/)\;(.+?)(?:$|\/)/g);
    const replacement = "/" + markStr + (match[0].endsWith("/") ? "/" : "");

    return input.replace(/\/\;(.+?)(?:$|\/)/g, replacement);
  }

  return input + markStr;
}

function markToString(mark: IFITMark): string {
  return ";" + mark.key + ((mark.value === null) ? "" : "=" + mark.value);
}

