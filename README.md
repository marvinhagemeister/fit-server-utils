# Fit-Server Utils

This package contains useful functions when dealing with the Sevenval FIT-Server.

## Usage

```bash
npm install --save-dev fit-server-utils
```

## API

```ts
interface IFITMark {
  key: string;
  value: string;
}
```

**`validateMark(mark: IFITMark): string`**

Validates a given mark. Returns `null` if valid and an error message if invalid.

**`getMarks(input: string): IFITMark[]`**

Gets all marks from a string.

**`updateMark(input: string, mark: IFITMark): string`**

Update or add a mark to a given string.

**`removeMark(input: string, markKey: string): string`**

Remove a mark from a string.

## License

MIT, see LICENSE file
