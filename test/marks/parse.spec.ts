import { getMarks } from "../../src/marks/parse";
import { assert as t } from "chai";

describe("marks > parse", () => {
  it("should get all marks from a string", () => {
    t.deepEqual(getMarks("whatever"), []);
    t.deepEqual(getMarks("http://example"), []);
    t.deepEqual(getMarks("http://example.com/"), []);
    t.deepEqual(getMarks("http://example.com/;d=pagejs-_all_-error"), [{
      key: "d",
      value: "pagejs-_all_-error",
    }]);
    t.deepEqual(getMarks("http://example.com/example/;;pass;m=js"), [{
      key: "pass",
      value: null,
    }, {
      key: "m",
      value: "js",
    }]);
  });
});
