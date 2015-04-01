# wing

This is the SCSS toolkit for the HEX brand. It is an attempt to provide simplicity
and abstraction similar to Bootstrap, but with our own aesthetic. It will be a
no-bullshit look in black and white.

Beginning to become something. Stay tuned.

## Usage and documentation

Currently the following is implemented:

1. Button style (normal and large). `.w-btn` and `.w-btn-large`.
1. Non-responsive grid. `.w-col-x-y` where `x` and `y` are integers from 1 - 12.
   These form a rational number which determines the percentaged based
   width of a column.

More documentation will follow as more features are added.

## Development setup

1. Make sure you have Node.js and `npm` installed.
1. Get the development dependencies with `npm install`.
1. Run `gulp` to start a build process.

## Contributing

1. Create a topic branch.
1. Add commits.
1. Rebase `master` into your topic branch.
1. Open a PR.

**Please never merge `master` into your topic branch.**

## License situation

The source is currently open for your studying, but as of yet, there is no license.
For now it's "All rights reserved". Sorry about that.

This project builds upon Normalize.css and the Pure CSS framework from Yahoo,
which are licenced under the MIT and BSD licenses, respectively.
