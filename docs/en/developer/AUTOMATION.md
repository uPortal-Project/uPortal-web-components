# Automation in uPortal Components

## Formatting

This project follows the [Google Code Style][], to simplify the process
[prettier][] a `npm run format` script is provided that will automatically adapt
code to meet a majority of the [Google Code Style][] conventions.

## Static Analysis

[ESLint][], [Remarklint][], and [Stylelint][] are use to automatically find
syntax errors and common anti-patterns in code and provide feedback on resolving
issues.

## Subproject Management

Each component in the project is its own subproject, to manage installing and
releasing these subprojects [Lerna][] is used. [Lerna][] centralizes
management tasks across packages, allowing all subprojects to be updated with
a single command.

[eslint]: https://eslint.org/
[google code style]: https://google.github.io/styleguide/jsguide.html
[lerna]: https://lernajs.io/
[prettier]: https://prettier.io/
[remarklint]: https://github.com/remarkjs/remark-lint
[stylelint]: https://stylelint.io/
