import { formatDate } from '../src/index';

describe('格式化时间测试', () => {
	test('不传日期时分秒', () => {
		expect(formatDate(1666064012000)).toBe('2022-10-18 11:33:32');
	});

	test('传日期时分秒', () => {
		expect(formatDate(1666064012000, 'Y/M/D h:m:s')).toBe(
			'2022/10/18 11:33:32'
		);
	});

	test('只生成时分秒', () => {
		expect(formatDate(1666064012000, 'h:m:s')).toBe('11:33:32');
	});

	test('只生成日期', () => {
		expect(formatDate(1666064012000, 'Y年M月D日')).toBe('2022年10月18日');
	});

	test('传字符串', () => {
		expect(
			formatDate(
				'Tue Oct 18 2022 14:08:59 GMT+0800 (中国标准时间)',
				'Y/M/D h:m:s'
			)
		).toBe('2022/10/18 14:08:59');
	});

	test('传Date类型', () => {
		expect(formatDate(new Date(1666064012000), 'Y/M/D h:m:s')).toBe(
			'2022/10/18 11:33:32'
		);
	});

	test('传递错误的日期', () => {
		expect(formatDate(new Date('错误的日期'))).toBe('');
		expect(formatDate(new Date('错误的日期'), undefined, '-')).toBe('-');
	});
});
