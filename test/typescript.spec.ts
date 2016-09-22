import * as tt from "typescript-definition-tester";

describe("TypeScript definitions", () => {
  // tslint:disable-next-line:non-arrow
  it("should compile against index.d.ts", function(done) {
    this.timeout(5000);
    tt.compileDirectory(
      __dirname + "/../src",
      (fileName: string) => fileName.match(/\.ts$/),
      () => done()
    );
  });
});
