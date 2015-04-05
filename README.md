# gh-annotate

Annotates files.

```
◦ cat CHANGELOG.md

  ## v0.8.2

  * Fix blabberdupes (@manilajs, #2)
  * Improve dapperdonks (@mashupgarage, #8)
```

```
◦ gh-annotate rstacruz/jquery.transit CHANGELOG.md
```

```
◦ cat CHANGELOG.md

  ## v0.8.2

  * Fix blabberdupes ([@manilajs], [#2])
  * Improve dapperdonks ([@mashupgarage], [#8])

  [@manilajs]: https://github.com/manilajs
  [#2]: https://github.com/rstacruz/jquery.transit/issues/2
  [#8]: https://github.com/rstacruz/jquery.transit/issues/8
```
