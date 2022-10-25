import { formatNumOverTenhousand } from '../src/index';

describe('formatNumOverTenhousand测试', () => {
	test('测试默认值', () => {
		expect(formatNumOverTenhousand(9999)).toBe('9999');
		expect(formatNumOverTenhousand(1)).toBe('1');
		expect(formatNumOverTenhousand(10000)).toBe('1.00w');
		expect(formatNumOverTenhousand(10001)).toBe('1.00w');
		expect(formatNumOverTenhousand(10050)).toBe('1.01w');
		expect(formatNumOverTenhousand(10500)).toBe('1.05w');
	});

	test('测试域值', () => {
		expect(formatNumOverTenhousand(9999, 20000)).toBe('9999');
		expect(formatNumOverTenhousand(19999, 20000)).toBe('19999');
		expect(formatNumOverTenhousand(20000, 20000)).toBe('2.00w');
		expect(formatNumOverTenhousand(307014, 20000)).toBe('30.70w');
	});

	test('测试方法', () => {
		expect(formatNumOverTenhousand(20010, 20000, 'round')).toBe('2.00w');
		expect(formatNumOverTenhousand(20010, 20000, 'ceil')).toBe('2.01w');
		expect(formatNumOverTenhousand(20010, 20000, 'floor')).toBe('2.00w');
		expect(formatNumOverTenhousand(20050, 20000, 'round')).toBe('2.01w');
		expect(formatNumOverTenhousand(20050, 20000, 'ceil')).toBe('2.01w');
		expect(formatNumOverTenhousand(20050, 20000, 'floor')).toBe('2.00w');
	});
});
