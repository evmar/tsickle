/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview This comment is ignore by Closure compiler.
 * @suppress {undefinedVars}
 */
/**
 *
 * @fileoverview The last fileoverview actually takes effect.
 * @suppress {checkTypes,extraRequire,globalThis,uselessCode}
 *
 */
/** Here's another trailing comment */
goog.module('test_files.file_comment.multiple_comments');
var module = module || { id: 'test_files/file_comment/multiple_comments.ts' };
/**
 * @return {?}
 */
function f() {
    // Make sure the globalThis suppression above is maintained.
    return this.x;
}
