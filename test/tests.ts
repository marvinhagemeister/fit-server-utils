process.env.NODE_ENV = "test";

declare function require(name: string): any;
/* tslint:disable no-var-requires */
require("source-map-support").install();
/* tslint:enable no-var-requires */

import "./index.spec";
import "./marks/parse.spec";
import "./marks/remove.spec";
import "./marks/update.spec";
import "./marks/validate.spec";

import "./typescript.spec";
