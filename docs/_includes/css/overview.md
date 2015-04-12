## General

This section talks about some general stuff that you need to know about when
using Wing.

You also need to keep in mind that we provide some styles in accordance with
our own aesthetic, that might not be entirely practical on *every* site. These
styles will be designated.

### HTML5

Wing makes use of some HTML5 elements, so for best results have an HTML
document that looks like the following:

```html
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```

### Responsive

Wing is a responsive CSS framework. Check out the grid section to learn more
about breakpoints and the like.

We're not entirely mobile-first, although we aim to work as well on the desktop
as on mobile viewports.

You probably want to include the following in your HTML `<head>` in order to
scale your site properly:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Container

You can set `.container` on any element you'd like to act as a container for
content. This will set some margin to separate the content. For this reason,
you might only want to do this once.

The grid, which we'll talk about in the next section, does not need to come in
a container. This is just a style we like to set on `<body>` so that no content
is right at the edges of the browser window.
