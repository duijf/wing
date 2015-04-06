## Typography

Wing comes with some sane typographic defaults. Here is what we do for you:

 * Align everything to a [baseline grid]. It consists of units of **27px**.
   Everything on the page snaps to it. Keeping everything aligned requires
   some discipline, but it makes the type on your website stand out.
 * Wing sets the heading and body font to Mozilla's `Fira Sans` and uses
   `Source Code Pro` from Adobe for monospace.
 * Thanks to [Normalize.css], the default styling of HTML elements is left
   untouched.
 * Wing sets a couple of opinionated defaults with regards to typography.
   The intention here is to aid you in sticking to some of the basic rules
   of type, even though you don't know them. You'll have to conciously override
   these rules.

More about this in the following subsections.

### Baseline grid

A baseline grid is a grid, just like described above, but instead of focussing
on aligning elements in columns, it focusses on rows. Each and every element
aligns on the baseline grid, when using Wing.

The easiest way to explain is to show you. Download the [baseliner] bookmarklet
and use it on this page with a *grid size* of **27px** and the default offset.

The grid is responsible for some good typography. The way the elements on this
page are sized makes for easier reading. You are of course free to ignore this,
but think about what you're throwing away.

#### Sticking to the baseline

This requires some work, however, it is not that difficult. You simply have to
make sure that each and every element has a total height that is a multiple of
**27px**. This means that the line-height *and* the total amount of borders,
padding and margin should be a multiple of **27px**.

If you are using SASS, we provide some convenience variables for you to use.
`$base-line-height` can be used to set margins and padding. Use arithmathic
to set a `font-size` and `line-height` that makes sense.

If you're not using SASS, take a look at the whitespace helper methods, found
later in this guide.

 [baseliner]:http://keyes.ie/things/baseliner/

### Headings

The default headings align with the baseline grid and scale with a ratio of `1.8`.
Here is a brief showcase&mdash;the first number denotes default pixel size, the
second the line height:

# h1. 111 / 135px

## h2. 62 / 81px

### h3. 34 / 54px

#### h4. 19 / 27px bold

##### h5. 19 / 27px uppercase

###### h6. 19 / 27px italic

Use them like you are used to:

```html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

### Body copy

TODO: Typographic rule about measure and give info on body copy.

### Inline elements

Wing leaves the default styling of most inline elements alone. For reference,
this is what some common inline elements look like.

#### Bold text

`<strong>` tags render **in bold**.

```html
<strong>this will render in a bold font</strong>
```

#### Italicized text

`<em>` tags render *in italics*.

```html
<em>this will render in an italic font-style</em>
```

#### Highlighted text

Text that you want to <mark>highlight the importance of</mark>, you can surround
with `<mark>` tags.

```html
<mark>this will be highlighted</mark>
```

#### Inserted text

Text that you want to give the semantic meaning to of being a later addition to
the document, you can surround with the `<ins>` tag.

<ins>It will render as underlined.</ins>

```html
<ins>this will be treated as a later addition to the document</ins>
```

#### Strikethrough

You can also <s>strike through</s> text with the `<s>` tag.

```html
<s>this text will be strucken</s>
```

#### Deleted text

Text that you want to be treated as if it's deleted, can be marked up with the
`<del>` tag. <del>It will also be rendered as struck through.</del>

```html
<del>this text will be treated as deleted</del>
```

#### Keyboard tag

You can use the `<kbd>` tag to signify input the user needs to give. It will
render as follows: Press <kbd>Ctrl + p</kbd> to print a web-page.

```html
Press <kdb>Ctrl + p</kbd> to print a web-page.
```

### Code

TODO: Code

 [baseline grid]:http://alistapart.com/article/settingtypeontheweb
 [Normalize.css]:http://necolas.github.io/normalize.css/
