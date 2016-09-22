import { IFITMark } from "../../src/marks/mark";
import { M_CONTENT, validateMark as validate } from "../../src/marks/validate";
import { assert as t } from "chai";

describe("marks > validate", () => {
  it("should validate debug mark", () => {
    let mark = {
      key: "whatever",
      value: "",
    };

    t.notEqual(validate(mark), null);

    mark.key = "d";
    t.notEqual(validate(mark), null);

    mark.value = "error";
    t.notEqual(validate(mark), null);

    mark.value = "error-_all_-";
    t.notEqual(validate(mark), null);

    mark.value = "error-_all_-debug";
    t.notEqual(validate(mark), null);

    mark.value = "pageend-_all_-verbose";
    t.equal(validate(mark), null);
  });

  it("should validate m mark", () => {
    let mark: IFITMark = {
      key: "m",
      value: null,
    };

    t.notEqual(validate(mark), null);

    mark.value = "";
    t.notEqual(validate(mark), null);

    mark.value = "whatever";
    t.notEqual(validate(mark), null);

    M_CONTENT.map(item => t.equal(validate({ key: "m", value: item }), null));
  });

  it("should validate marks: lm, pass, ppl, rc, ucm", () => {
    const marks = ["lm", "pass", "ppl", "rc", "ucm"];

    marks.map(name => {
      let mark: IFITMark = {
        key: name,
        value: null,
      };

      t.notEqual(validate(mark), null, `mark: { key: ${mark.key}, value: ${mark.value} }`);

      mark.value = "";
      t.notEqual(validate(mark), null, `mark: { key: ${mark.key}, value: ${mark.value} }`);

      mark.value = "whatever;";
      t.equal(validate(mark), null, `mark: { key: ${mark.key}, value: ${mark.value} }`);

      mark.value = "whatever";
      t.equal(validate(mark), null, `mark: { key: ${mark.key}, value: ${mark.value} }`);
    });
  });

});
