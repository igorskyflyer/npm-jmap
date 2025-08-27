// Author: Igor Dimitrijević (@igorskyflyer)

import { existsSync, readFileSync } from 'node:fs'

interface JsonObject {
  [index: string]: unknown
}

/**
 * Reads a JSON file into a Map.
 * @param path Path to the JSON file.
 * @throws Throws an exception if the file cannot be read or there is an error while parsing the JSON file.
 * @returns A Map with all JSON properties and values.
 */
export function jMap(path: string): Map<string, unknown> {
  if (typeof path !== 'string') {
    throw new Error('No valid path provided.')
  }

  if (!existsSync(path)) {
    throw new Error("File doesn't exist.")
  }

  try {
    const contents: string = readFileSync(path, 'utf-8')
    const json: JsonObject = JSON.parse(contents)
    const map: Map<string, unknown> = new Map()

    for (const prop in json) {
      map.set(prop, json[prop])
    }

    return map
  } catch {
    throw new Error("Couldn't convert the provided JSON file into a Map.")
  }
}
