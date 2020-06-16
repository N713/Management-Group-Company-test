'use strict';

import {load} from "./components/backend";
import {renderCards} from "./components/cards";
import {renderError} from "./components/error";

load(renderCards, renderError);
