# next-toastify
> nx.toast for react-toastify.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add react-toastify @jswork/next-toastify
```

## usage
```js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import '@jswork/next-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App(){
  const notify = () => nx.toast("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-toastify/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-toastify
[version-url]: https://npmjs.org/package/@jswork/next-toastify

[license-image]: https://img.shields.io/npm/l/@jswork/next-toastify
[license-url]: https://github.com/afeiship/next-toastify/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-toastify
[size-url]: https://github.com/afeiship/next-toastify/blob/master/dist/next-toastify.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-toastify
[download-url]: https://www.npmjs.com/package/@jswork/next-toastify
