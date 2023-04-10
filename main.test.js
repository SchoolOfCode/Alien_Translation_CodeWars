//👉 Write your tests below here:
import { test, expect } from '@jest/globals';
import { alienTranslator } from './main.js';

//test easiest case - middle of alphabet
test('correct translation middle of alphabet', () => {
    expect(alienTranslator('mjqqt')).toBe('hello');
});

//test end of alphabet (wrap around)
test('correct translation end of alphabet', () => {
    expect(alienTranslator('e')).toBe('z');
});

//test spaces
test('correct translation with spaces', () => {
    expect(alienTranslator('mjqqt e')).toBe('hello z');
});