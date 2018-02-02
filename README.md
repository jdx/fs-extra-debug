fs-extra-debug
==============

Monitor [fs-extra](https://npm.im/fs-extra) calls. Uses the [debug](https://npm.im/debug) module.

Usage
-----

Add `require('fs-extra-debug')` before you start using `fs-extra`. It does not need to be required before `fs-extra`.

Then when you run your application, set the environment variables: `FS_DEBUG=1` and `DEBUG=fs`. You can also use `DEBUG=*`. (See [debug](https://npmjs.org/package/debug) for more info)

Example output:

```
  fs outputFile '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/.git' +3ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/package.json' +1ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/commands' +0ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/hooks/init' +1ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/hooks/init.ts' +0ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/plugins' +0ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/plugins.ts' +0ms
  fs remove '/Users/jdickey/Library/Caches/ts-plugin' +0ms
  fs remove '/Users/jdickey/.local/share/ts-plugin' +1ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/package.json' +0ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/commands' +1ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/hooks/init' +0ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/hooks/init.ts' +0ms
  fs pathExists '/Users/jdickey/src/github.com/anycli/engine/test/fixtures/typescript2/src/plugins' +0ms
```
