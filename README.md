# auto-typing-react

> Auto typing animation's component

[![NPM](https://img.shields.io/npm/v/react-auto-typing.svg)](https://www.npmjs.com/package/auto-typing-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-auto-typing
```

## Usage

```jsx
import React from 'react'

import AutoTyping, { BlinkCursor } from 'react-auto-typing'

export const myComponent = () => (
  <>
    <AutoTyping
      active // <boolean>
      textRef='Your string text' // <string>
      writeSpeed={150} // <number>
      deleteSpeed={150} // <number>
      delayToWrite={1000} // <number>
      delayToDelete={2000} // <number>
    />
    <BlinkCursor
      active // <boolean>
      blinkSpeed={500} // <number>
    />
  </>
)
```

## Properties

_If you don't put the properties, they will use default values._

### AutoTyping

- `active` start/stop animation. [ _Default value:_ **true** ] `<boolean>`
- `textRef` string to write. [ _Default value:_ **Input a string** ] `<string>`
- `writeSpeed` writing speed. [ _Default value:_ **50** ] `<number>`
- `deleteSpeed` delete speed. [ _Default value:_ **50** ] `<number>`
- `delayToWrite` time until starts to write. [ _Default value:_ **1000** ] `<number>`
- `delayToDelete` time until starts to delete. [ _Default value:_ **1500** ] `<number>`

### BlinkCursor

- `active` start/stop animation. [ _Default value:_ **true** ] `<boolean>`
- `blinkSpeed` speed of blink. [ _Default value:_ **500** ] `<number>`

## License

MIT © [iZanfir](https://github.com/iZanfir)
