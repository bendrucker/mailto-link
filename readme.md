# mailto-link [![Build Status](https://travis-ci.org/bendrucker/mailto-link.svg?branch=master)](https://travis-ci.org/bendrucker/mailto-link)

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
