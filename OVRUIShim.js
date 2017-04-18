/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This file is a temporary compatibility shim.
 * As long as products are using the global OVRUI variable, we need to provide it.
 * Once our products have been fully converted over to ES Modules and the RN Packager,
 * this file can be deleted.
 */

const ovrui = require('./src/OVRUI');
if (!window.OVRUI) {
  window.OVRUI = ovrui;
} else {
  window.OVRUI = Object.assign(window.OVRUI, ovrui);
}
