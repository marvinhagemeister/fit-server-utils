# Fit-Server Utils

This package contains useful functions when dealing with the Sevenval FIT-Server.

## Usage

```bash
npm install --save-dev fit-server-utils
```

## API

### `validateMark(mark: { key: "d", value: "pageend-_all_-verbose" }): string`

Validates a given mark. Returns `null` if valid and an error message if invalid.

### `getMarks(input: string): IFITMark[]`

Gets all marks from a string.

### `updateMark(input: string, mark: IFITMark): string`

Update or add a mark to a given string.

## License

MIT, see LICENSE file
