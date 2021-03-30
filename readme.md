# mailto-link [![tests](https://github.com/bendrucker/mailto-link/actions/workflows/test.yml/badge.svg)](https://github.com/bendrucker/mailto-link/actions/workflows/test.yml)

> Generate a mailto protocol link


## Install

```
$ npm install --save mailto-link
```


## Usage

```js
var mailtoLink = require('mailto-link')

mailtoLink({to: 'bvdrucker@gmail', subject: 'Nice mailto lib'})
//=> mailto:bvdrucker@gmail.com?subject=Nice%20mailto%20lib
```

## API

#### `mailtoLink(options)` -> `string`

##### options

*Required*  
Type: `object`

###### to / cc / bcc

Type: `string` / `array[string]`

List of emails to send to.

###### subject

Type: `string`

The email subject.

###### body

Type: `string`

The email body.


## License

MIT © [Ben Drucker](http://bendrucker.me)
