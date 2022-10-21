import { formatDate, formatSecond } from '../src/index';

describe('formatDate测试', () => {
	let numberTime = 1666064012000;
	beforeEach(() => {
		// 适配时区
		numberTime = 1666064012000 + new Date().getTimezoneOffset() * 60 * 1000;
	});

	test('不传日期时分秒', () => {
		expect(formatDate(numberTime)).toBe('2022-10-18 03:33:32');
	});

	test('传日期时分秒', () => {
		expect(formatDate(numberTime, 'Y/M/D h:m:s')).toBe('2022/10/18 03:33:32');
	});

	test('只生成时分秒', () => {
		expect(formatDate(numberTime, 'h:m:s')).toBe('03:33:32');
	});

	test('只生成日期', () => {
		expect(formatDate(numberTime, 'Y年M月D日')).toBe('2022年10月18日');
	});

	test('传字符串', () => {
		expect(
			formatDate(
				`Tue Oct 18 2022 14:08:59 GMT+0${-(
					new Date().getTimezoneOffset() / 60
				)}00 (中国标准时间)`,
				'Y/M/D h:m:s'
			)
		).toBe('2022/10/18 14:08:59');
	});

	test('传Date类型', () => {
		expect(formatDate(new Date(numberTime), 'Y/M/D h:m:s')).toBe(
			'2022/10/18 03:33:32'
		);
	});

	test('传递错误的日期', () => {
		expect(formatDate(new Date('错误的日期'))).toBe('');
		expect(formatDate(new Date('错误的日期'), undefined, '-')).toBe('-');
	});
});

describe('formatSecond测试', () => {
	test('正常输出格式', () => {
		expect(formatSecond(1)).toBe('00:00:01');
		expect(formatSecond(20)).toBe('00:00:20');
		expect(formatSecond(59)).toBe('00:00:59');
		expect(formatSecond(60)).toBe('00:01:00');
		expect(formatSecond(3600)).toBe('01:00:00');
		expect(formatSecond(78029)).toBe('21:40:29');
		expect(formatSecond(324324324324)).toBe('90090090:05:24');
	});
});
