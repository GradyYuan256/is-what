import { getType } from '../index.js'

describe('测试数据类型', () => {
    it('null', () => {
        expect(getType(null)).toBe('Null')
    })
    it('undefined', () => {
        expect(getType(undefined)).toBe('Undefined')
    })
    it('number', () => {
        expect(getType(100)).toBe('Number')
        expect(getType(NaN)).toBe('Number')
        expect(getType(Infinity)).toBe('Number')
        expect(getType(-Infinity)).toBe('Number')
    })
    it('string', () => {
        expect(getType('abc')).toBe('String')
    })
    it('boolean', () => {
        expect(getType(true)).toBe('Boolean')
    })
    it('symbol', () => {
        expect(getType(Symbol())).toBe('Symbol')
    })
    it('bigint', () => {
        expect(getType(BigInt(100))).toBe('BigInt')
    })
    it('object', () => {
        expect(getType({})).toBe('Object')
    })
    it('array', () => {
        expect(getType([])).toBe('Array')
    })
    it('function', () => {
        expect(getType(() => { })).toBe('Function')
        expect(getType(class Foo { })).toBe('Function')
    })
    it('map', () => {
        expect(getType(new Map())).toBe('Map')
    })
    it('weakmap', () => {
        expect(getType(new WeakMap())).toBe('WeakMap')
    })
    it('set', () => {
        expect(getType(new Set())).toBe('Set')
    })
    it('weakset', () => {
        expect(getType(new WeakSet())).toBe('WeakSet')
    })
    it('date', () => {
        expect(getType(new Date())).toBe('Date')
    })
    it('regexp', () => {
        expect(getType(new RegExp())).toBe('RegExp')
    })
    it('error', () => {
        expect(getType(new Error())).toBe('Error')
    })
    it('promise', () => {
        expect(getType(Promise.resolve())).toBe('Promise')
    })
})