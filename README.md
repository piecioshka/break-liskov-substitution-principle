# break-liskov-substitution-principle

Example code which breaks Liskov substitution principle

## Preview 🎉

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
