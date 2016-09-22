export function removeMark(input: string, markKey: string): string {
  const regex = new RegExp("\;" + markKey + "(\\=[\\w-_]+)?", "g");
  return input.replace(regex, "");
}
