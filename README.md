# jMap
🕶️ Reads a JSON file into a Map. 🌻


<br>
<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/jmap"
```

<br>

## 🤹🏼 API

```jMap(path: string): Map<string, any>```

Reads a JSON file into a Map.

<br>

```path: string``` - path to the JSON file, **required**.  

<br>

***Throws*** an exception if the file cannot be read or there is an error while parsing the JSON file.  

 Returns Map with all JSON properties and values.

<br>

`demo.ts`

```ts
import { jMap } from '@igor.dvlpr/jmap'

const sample: Map<string, any> = jMap('./test/data/sample.json')

console.log(sample.get('glossary').title) // 'example glossary'

```

> The used sample JSON file is located here, [JSON sample](https://github.com/igorskyflyer/npm-jmap/blob/main/test/data/sample.json).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-jmap/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/zep](https://www.npmjs.com/package/@igor.dvlpr/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

[@igor.dvlpr/pathexists](https://www.npmjs.com/package/@igor.dvlpr/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igor.dvlpr/adblock-filter-counter](https://www.npmjs.com/package/@igor.dvlpr/adblock-filter-counter) 

> _🐲 A dead simple npm module that counts Adblock filter rules.🦘_

[@igor.dvlpr/mp3size](https://www.npmjs.com/package/@igor.dvlpr/mp3size)

> _🧮 Calculates an estimated file size of Mp3 files. 🎶_

[@igor.dvlpr/odin](https://www.npmjs.com/package/@igor.dvlpr/odin)

> _🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
