<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-jmap/main/media/jmap.png" alt="Icon of jMap" width="256" height="256">
  <h1>jMap</h1>
</div>

<br>

<h4 align="center">🕶️ Reads a JSON file into a Map. 🌻</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 📂 Load any valid JSON file into memory instantly
- 🗺️ Get all properties as a ready‑to‑use Map
- 🎯 Access values quickly by key lookup
- 🧩 Works with any JSON structure, flat or nested
- 🚫 Clear errors if file is missing or invalid
- ⚡ Fast, synchronous execution for small to medium files
- 🔍 Retains exact JSON keys and values with no transformation

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/jmap
```

```bash
yarn add @igorskyflyer/jmap
```

```bash
npm i @igorskyflyer/jmap
```

<br>
<br>

## 🤹🏼 API

```jMap(path: string): Map<string, unknown>```

Reads a JSON file into a Map.

<br>

```path: string``` - path to the JSON file, **required**.  

<br>

***Throws*** an exception if the file cannot be read or there is an error while parsing the JSON file.  

 Returns `Map` with all JSON properties and values.

<br>

`demo.ts`

```ts
import { jMap } from '@igorskyflyer/jmap'

const sample: Map<string, unknown> = jMap('./test/data/sample.json')

console.log(sample.get('glossary').title) // 'example glossary'

```

> The used sample JSON file is located here, [JSON sample](https://github.com/igorskyflyer/npm-jmap/blob/main/test/data/sample.json).

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-jmap/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-jmap/blob/main/LICENSE.txt).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/zep](https://www.npmjs.com/package/@igorskyflyer/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

[@igorskyflyer/pathexists](https://www.npmjs.com/package/@igorskyflyer/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igorskyflyer/adblock-filter-counter](https://www.npmjs.com/package/@igorskyflyer/adblock-filter-counter) 

> _🐲 A dead simple npm module that counts Adblock filter rules.🦘_

[@igorskyflyer/mp3size](https://www.npmjs.com/package/@igorskyflyer/mp3size)

> _🧮 Calculates an estimated file size of Mp3 files. 🎶_

[@igorskyflyer/odin](https://www.npmjs.com/package/@igorskyflyer/odin)

> _🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
