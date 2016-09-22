process.env.NODE_ENV = "test";

declare function require(name: string): any;
require("source-map-support").install();

import "./marks/parse.spec";
import "./marks/update.spec";
import "./marks/validate.spec";
