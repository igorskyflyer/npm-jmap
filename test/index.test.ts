// Author: Igor Dimitrijević (@igorskyflyer)]

// JSON sample file from
// https://json.org/example.html

import { assert, describe, test } from 'vitest'
import { jMap } from '../src/index.ts'

describe('🧪 jMap tests 🧪', () => {
	test('#1 should throw', () => {
		assert.throws(() => {
			jMap('./test/data/sampleZ.json')
		})
	}) // #1

	test('#2 should return a Map', () => {
		const sample: Map<string, any> = jMap('./test/data/sample.json')
		assert.isTrue(sample instanceof Map)
	}) // #2

	test('#3 should return an object', () => {
		const sample: Map<string, any> = jMap('./test/data/sample.json')
		assert.isObject(sample.get('glossary'))
	}) // #3

	test('#4 should return true', () => {
		const sample: Map<string, any> = jMap('./test/data/sample.json')
		assert.equal(sample.get('glossary').title, 'example glossary')
	}) // #4

	test('#5 should return true', () => {
		const sample: Map<string, any> = jMap('./test/data/sample.json')
		assert.equal(
			sample.get('glossary').GlossDiv.GlossList.GlossEntry.Abbrev,
			'ISO 8879:1986'
		)
	}) // #5
})
