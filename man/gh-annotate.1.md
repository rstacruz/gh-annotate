# gh-annotate(1) -- Add GitHub links to Markdown files

## USAGE

gh-annotate <file><br>
... | gh-annotate &gt; <outfile>

## DESCRIPTION

Adds GitHub links to Markdown files. Perfect for maintaining changelog files and other Markdown artifacts.

Running gh-annotate(1) on a file will perform the following things:

 * Turns `#847` to issue links.
 * Turns `@rstacruz` to user links.
 * Turns `v0.2.4(...v0.2.3)` into compare links.

It Is idempotent, so running (and re-running) it on a file should have no side effects.

## OPTIONS

 * <file> :
   The file to operate on. If provided, it will be written to in place.

 * `-h`, `--help` :
   Displays the help screen.

 * `--version` : 
   Displays version information.

## INSTALLATION

gh-annotate(1) is available via npm as [gh-annotate](https://npmjs.org/package/gh-annotate).

```
npm install -g gh-annotate
```

## EXAMPLE

Given this file:

```
$ cat CHANGELOG.md

  ## v0.8.2

  * Fix blabberdupes (@manilajs, #2)
  * Improve dapperdonks (@mashupgarage, #8)
```

Run it, and you get this:

```
$ gh-annotate CHANGELOG.md
$ cat CHANGELOG.md

## v0.8.2

* Fix blabberdupes ([@manilajs], [#2])
* Improve dapperdonks ([@mashupgarage], [#8])

[@manilajs]: https://github.com/manilajs
[@mashupgarage]: https://github.com/mashupgarage
[#2]: https://github.com/rstacruz/jquery.transit/issues/2
[#8]: https://github.com/rstacruz/jquery.transit/issues/8
```

## COPYRIGHT

**gh-annotate** (c) 2015+, Rico Sta. Cruz. Released under the MIT License.
Authored and maintained by Rico Sta. Cruz with help from contributors.

* [ricostacruz.com](http://ricostacruz.com)
* GitHub [rstacruz/gh-annotate](https://github.com/rstacruz/gh-annotate)
* GitHub [@rstacruz](https://github.com/rstacruz)
* Twitter [@rstacruz](https://twitter.com/rstacruz)
