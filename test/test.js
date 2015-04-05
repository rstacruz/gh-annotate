var expect = require('chai').expect;
var injekt = require('../bin/gh-annotate').injekt;

function work(str) {
  return injekt(str, 'user/repo');
}

it('annotates issues', function () {
  var out = work("Hello #1");
  expect(out).eql([
    "Hello [#1]\n",
    "\n",
    "[#1]: https://github.com/user/repo/issues/1"
  ].join(''));
});

it('annotates users', function () {
  var out = work("Hello @rstacruz");
  expect(out).eql([
    "Hello [@rstacruz]\n",
    "\n",
    "[@rstacruz]: https://github.com/rstacruz"
  ].join(''));
});

it('annotates users and issues', function () {
  var out = work("Hello #100 (@rstacruz)");
  expect(out).eql([
    "Hello [#100] ([@rstacruz])\n",
    "\n",
    "[#100]: https://github.com/user/repo/issues/100\n",
    "[@rstacruz]: https://github.com/rstacruz"
  ].join(''));
});

it('is idempotent', function () {
  var out = work(work(work("Hello #100 (@rstacruz)")));
  expect(out).eql([
    "Hello [#100] ([@rstacruz])\n",
    "\n",
    "[#100]: https://github.com/user/repo/issues/100\n",
    "[@rstacruz]: https://github.com/rstacruz"
  ].join(''));
});

it('does not duplicate annotations', function () {
  var out = work([
    "Hello #1\n",
    "[#1]: http://google.com"
  ].join(""));

  expect(out).eql([
    "Hello [#1]\n",
    "[#1]: http://google.com"
  ].join(''));
});
