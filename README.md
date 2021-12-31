# break-liskov-substitution-principle

[![travis](https://img.shields.io/travis/piecioshka/break-liskov-substitution-principle.svg)](https://travis-ci.org/piecioshka/break-liskov-substitution-principle)
[![coveralls](https://coveralls.io/repos/github/piecioshka/break-liskov-substitution-principle/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/break-liskov-substitution-principle?branch=master)
[![snyk](https://snyk.io/test/github/piecioshka/break-liskov-substitution-principle/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/break-liskov-substitution-principle?targetFile=package.json)

Example code which breaks Liskov substitution principle

## Demo :tada:

```text

  Rectangle
    ✓ should have the width and height what are passed

  Square
    1) should have the width and height what are passed


  1 passing (12ms)
  1 failing

  1) Square
       should have the width and height what are passed:

      AssertionError: expected 50 to equal 40
      + expected - actual

      -50
      +40

```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
