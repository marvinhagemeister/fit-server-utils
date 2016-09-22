import { IFITMark } from "../../src/marks/mark";
import { updateMark } from "../../src/marks/update";
import { assert as t } from "chai";

describe("marks > update", () => {
  it("should update existing marks", () => {
    let input = "http://example.com/";
    let mark: IFITMark = {
      key: "d",
      value: "pagejs-_all_-error",
    };

    t.equal(updateMark(input, mark), "http://example.com/;d=pagejs-_all_-error");

    input = "http://example.com/;d=pagejs-_all_-error";
    mark.value = "pagejs-request-error";
    t.equal(updateMark(input, mark), "http://example.com/;d=pagejs-request-error");

    input = "http://example.com/;d=pagejs-_all_-error;lm;pass";
    mark.value = "pagejs-request-error";
    t.equal(updateMark(input, mark), "http://example.com/;d=pagejs-request-error;lm;pass");

    input = "http://example.com/;d=pagejs-_all_-error;lm;pass/my/page.html";
    mark.value = "pagejs-request-error";
    t.equal(updateMark(input, mark), "http://example.com/;d=pagejs-request-error;lm;pass/my/page.html");
  });
});
