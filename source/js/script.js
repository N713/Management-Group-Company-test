'use strict';

import {load} from "./components/backend";
import {renderCards} from "./components/cards";

const off = (response) => {
  console.log(response);
}

load(renderCards, off);
