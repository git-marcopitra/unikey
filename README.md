# UNIKEY

A library for unique code generation

## Install

For npm:

```bash
npm i unikey
```

For yarn:

```bash
yarn add unikey
```

For pnpm:

```bash
pnpm add unikey
```

## Usage

```js
import unikey from 'unikey';

const key = unikey(); // enf5a8t9

// ...
```

### With length

```js
import unikey from 'unikey';

const key = unikey(16); // tcmd6gud23ga2f5p

// ...
```

### With Options

```js
import unikey from 'unikey';

const mixedKey = unikey(16, { case: 'mixed' }); // riQTUuoZ3iV9RQEH
const upperKey = unikey(16, { case: 'upper' }); // IAYNLQD8T3DJ63GR

// ...
```
