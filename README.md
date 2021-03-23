# `http-rpc`

> HTTP Provider w/ BackPressure

## Usage

```js
const http = require('http');
const Web3HttpProvider = require('http-rpc');

const options = {
    keepAlive: true,
    timeout: 20000, // milliseconds,
    headers: [{name: 'Access-Control-Allow-Origin', value: '*'},{...}],
    withCredentials: false,
    agent: {http: http.Agent(...), baseUrl: ''}
};

const provider = new Web3HttpProvider('http://localhost:8545', options);
```

#### Batch

`new web3.eth.BatchRequest()`

### Configuration

```js
const Web3HttpProvider = require('http-rpc');
var options = {
    keepAlive: true,
    withCredentials: false,
    timeout: 20000, // ms
    headers: [
        {
            name: 'Access-Control-Allow-Origin',
            value: '*'
        },
        {
            ...
        }
    ],
    agent: {
        http: http.Agent(...),
        baseUrl: ''
    }
};

var provider = new Web3HttpProvider('http://localhost:8545', options);
```
