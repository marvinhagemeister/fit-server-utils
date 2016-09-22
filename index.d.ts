export interface IFITMark {
  key: string;
  value: string;
}

export function validateMark(mark: IFITMark): string;
export function getMarks(input: string): IFITMark[];
export function updateMark(input: string, mark: IFITMark): string;
