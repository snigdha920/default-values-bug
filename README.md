# default-values-bug

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

This project was created using `bun init` in bun v1.1.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## To reproduce the bug

1. Comment out `default: 'world'` in the index.ts, and then try out the request on http://localhost:3000/swagger, the parameter `name` will not have a default value.
  
2. Put the `default: 'world'` back in the index.ts, and then try out the request on http://localhost:3000/swagger, the parameter `name` will always have a default value, even if another value is provided