# Genetic Algorithms in TypeScript

Browser-based exercises inspired by *Genetic Algorithms with Python* by **Clinton Sheppard**. TypeScript source is compiled to JavaScript in `dist`, allowing the string-matching experiment to run directly in a browser.

## Run locally

From the repository root, use Python 3 to start a static server:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000` in a browser. No npm installation or build step is required to view the checked-in example. Stop the server with `Ctrl+C`.

## What the example does

[src/index.ts](src/index.ts) starts `GuessPassword.run()` with a fixed Lorem ipsum target. Candidate strings are scored by counting characters that match the target at the same position. The page displays the current candidate, fitness, and elapsed time in milliseconds.

The name “GuessPassword” describes a toy target-string exercise. It does not connect to accounts, attempt authentication, or recover real passwords.

## Modify and compile

The checked-in `dist` files are sufficient for the existing demo. To modify TypeScript, install a TypeScript compiler in your development environment, then run from the repository root:

```sh
tsc -p tsconfig.json
```

The compiler reads `src` and writes ES modules and source maps to `dist`. Serve the files over HTTP rather than opening `index.html` through `file://`.

Change the target in `src/index.ts` and recompile. Every target character must exist in `GuessPassword.geneSet`; otherwise optimal fitness cannot be reached.

## Source map

- [src/Genetic.ts](src/Genetic.ts): chromosome search and benchmark helpers.
- [src/GuessPassword.ts](src/GuessPassword.ts): string fitness and rendering.
- [src/Random.ts](src/Random.ts): random helpers.
- [index.html](index.html): browser entry point.
- [tsconfig.json](tsconfig.json): compiler configuration.

There is no package manifest, pinned compiler version, or automated test runner. Results and runtime vary because the search is randomized. The book attribution is preserved from the original README.
