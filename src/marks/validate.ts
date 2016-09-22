import { IFITMark } from "./mark";

export const DEBUG_TARGET = ["pageend", "page", "pagejs", "pagejson", "errorlog"];
export const DEBUG_CHANNEL = ["_all_", "ac", "config", "dc", "flow", "parser",
  "request", "time"];
export const DEBUG_LEVEL = ["error", "warning", "info", "verbose"];
export const M_CONTENT = ["js", "jsl", "css", "is"];

export function validate(mark: IFITMark): string {
  switch (mark.key) {
    case "d":
      return validateDebugMark(mark.value);
    case "m":
      return validateMMark(mark.value);
    case "lm":
    case "pass":
    case "ppl":
    case "rc":
    case "ucm":
      if (mark.value === null || mark.value === "") {
        return "Mark \"" + mark.key + "\" doesn\'t have a value.";
      }

      return null;
    default:
      return "Unknown mark: " + mark.key;
  }
}

export function validateMMark(value: string): string {
  if (M_CONTENT.indexOf(value) === -1) {
    return "Invalid mark value \"" + value
      + "\" for mark of type \"m\". Allowed values are: "
      + M_CONTENT.join(", ");
  }

  if (typeof value === "undefined" || value === null) {
    return "\"m\" mark value must not be undefined or null. "
      + " Allowed values are: " + M_CONTENT.join(", ");
  }

  return null;
}

export function validateDebugMark(input: string | string[]): string {
  let values = !Array.isArray(input) ? input.split("-") : input;

  values.forEach(val => {
    if (val.indexOf(";") > -1) {
      return "mark value must not contain a \";\"";
    }
  });

  if (values.length < 3) {
    if (values[0] === "") {
      return "\"d\" mark must not have a value of null";
    }

    return "Received invalid mark properties \"" + input
      + "\" for mark of type \"d\"";
  }

  if (DEBUG_TARGET.indexOf(values[0]) === -1) {
    return "Invalid debug target \"" + values[0]
      + "\" for mark of type \"d\". Allowed values are: "
      + DEBUG_TARGET.join(", ");
  }

  if (DEBUG_CHANNEL.indexOf(values[1]) === -1) {
    return "Invalid debug channel \"" + values[1]
      + "\" for mark of type \"d\". Allowed values are: "
      + DEBUG_CHANNEL.join(", ");
  }

  if (DEBUG_LEVEL.indexOf(values[2]) === -1) {
    return "Invalid debug level \"" + values[2]
      + "\" for mark of type \"d\". Allowed values are: "
      + DEBUG_LEVEL.join(", ");
  }

  return null;
}
