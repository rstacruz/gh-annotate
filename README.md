# gh-annotate

Adds GitHub links to Markdown files. Perfect for maintaining changelog files. See: [gh-annotate(1)].

[![Status](https://travis-ci.org/rstacruz/gh-annotate.svg?branch=master)](https://travis-ci.org/rstacruz/gh-annotate)  

<br>

## What it does

Running [gh-annotate(1)] on a file will perform the following things:

 * Turns `#847` to issue links.
 * Turns `@rstacruz` to user links.
 * Turns `v0.2.4(...v0.2.3)` into compare links.

It is idempotent, so running (and re-running) it on a file should have no side effects.

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
◦ gh-annotate CHANGELOG.md
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

[![npm version](http://img.shields.io/npm/v/gh-annotate.svg?style=flat)](https://npmjs.org/package/gh-annotate "View this project on npm")

<br>

## Thanks

**gh-annotate** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/gh-annotate/contributors
[gh-annotate(1)]: http://rawgit.com/rstacruz/gh-annotate/master/man/gh-annotate.1.html
