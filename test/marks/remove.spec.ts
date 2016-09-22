import { removeMark } from "../../src/marks/remove";
import { assert as t } from "chai";

describe("marks > remove", () => {
  it("should remove a single mark", () => {
    let input = "http://example.com/;m;d=debug-_all_-sdasd;lm";
    t.equal(removeMark(input, "d"), "http://example.com/;m;lm");

    input = "http://example.com/asdf.html";
    t.equal(removeMark(input, "d"), "http://example.com/asdf.html");

    input = "http://example.com/;m;d=debug-_all_-sdasd;lm/index/index.html";
    t.equal(removeMark(input, "d"), "http://example.com/;m;lm/index/index.html");

    input = "http://example.com/;m;d=debug-_all_-sdasd;lm/index/index.html";
    t.equal(removeMark(input, "lm"), "http://example.com/;m;d=debug-_all_-sdasd/index/index.html");
  });
});
