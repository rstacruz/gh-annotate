# gh-annotate

Adds GitHub links to Markdown files. Perfect for maintaining changelog files.

<br>

## What it does

 * Turns `#847` to issue links.
 * Turns `@rstacruz` to user links.
 * Is idempotent.

<br>

## Example

Given this file:

```
◦ cat CHANGELOG.md

## v0.8.2

* Fix blabberdupes (@manilajs, #2)
* Improve dapperdonks (@mashupgarage, #8)
```

Run it:

```
◦ gh-annotate rstacruz/jquery.transit CHANGELOG.md
```

And you get this:

    ◦ cat CHANGELOG.md

    ## v0.8.2

    * Fix blabberdupes ([@manilajs], [#2])
    * Improve dapperdonks ([@mashupgarage], [#8])

    [@manilajs]: https://github.com/manilajs
    [@mashupgarage]: https://github.com/mashupgarage
    [#2]: https://github.com/rstacruz/jquery.transit/issues/2
    [#8]: https://github.com/rstacruz/jquery.transit/issues/8

<br>

## Install

```
npm install -g gh-annotate
```
