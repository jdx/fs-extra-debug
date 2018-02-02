fs-extra-debug
==============

Monitor [fs-extra](https://npm.im/fs-extra) calls. Uses the [debug](https://npm.im/debug) module.

Usage
-----

Add `require('fs-extra-debug')` before you start using `fs-extra`. It does not need to be required before `fs-extra`.

Then when you run your application, set the environment variables: `FS_EXTRA_DEBUG=1` and `DEBUG=fs`.
