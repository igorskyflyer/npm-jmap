// Author: Igor Dimitrijević (@igorskyflyer)

import { existsSync, readFileSync } from 'node:fs'

interface JsonObject {
	[index: string]: any
}

export function jMap(path: string): Map<string, any> {
	if (typeof path !== 'string') {
		throw 'No valid path provided.'
	}

	if (!existsSync(path)) {
		throw "File doesn't exist."
	}

	try {
		const contents: string = readFileSync(path, 'utf-8')
		const json: JsonObject = JSON.parse(contents)
		const map: Map<string, any> = new Map()

		for (const prop in json) {
			map.set(prop, json[prop])
		}

		return map
	} catch {
		throw "Couldn't convert the provided JSON file into a Map."
	}
}
