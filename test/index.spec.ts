import * as index from "../src/index";
import { assert as t } from "chai";

describe("index", () => {
  it("should export", () => {
    t.equal(typeof index.validateMark, "function");
    t.equal(typeof index.getMarks, "function");
    t.equal(typeof index.updateMark, "function");
    t.equal(typeof index.removeMark, "function");
  });
});
