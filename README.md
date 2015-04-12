# wing

This is the SCSS toolkit for the HEX brand. It is an attempt to provide simplicity
and abstraction similar to Bootstrap, but with our own aesthetic. It will be a
no-bullshit look in black and white.

## Quickstart

The project is currently still in development. There is no quickstart yet.
See the instructions for building the scss, and include the resulting file
in your `<head>` like so:

```html
<link rel="stylesheet" href="/path/to/wing.css">
```

## Dependencies

To build the toolkit, you need to have `node` and `npm` installed.

To build and view the docs, you need to have the Ruby programming language
installed, and the latest version of the `jekyll` gem.

## Building wing

Make sure you have the dependencies installed. The following will build
`wing.css` in the root of the repository.

1. `git clone git@github.com:hex-sh/wing.git && cd wing`
1. `npm install`
1. `gulp`

## Building the docs

The documentation is a Jekyll site, which contains all the information on the
usage of wing, what the default styles are and the components that wing ships
with.

Currently, you have to build the site yourself to view it. You can do this with
the following set of commands.

1. `cd wing/docs`
1. `jekyll serve --watch`
1. `open http://localhost:4000`

## Contributing

Issues and feature requests are more than welcome!

PR flow:

1. Create a topic branch.
1. Add commits.
1. Rebase `master` into your topic branch.
1. Open a PR.

**Please never merge `master` into your topic branch.** Use rebase instead.

## License situation

The source is currently open for your studying, but as of yet, there is no license.
For now it's "All rights reserved". Sorry about that.

This project builds upon Normalize.css and the Pure CSS framework from Yahoo,
which are licenced under the MIT and BSD licenses, respectively.
