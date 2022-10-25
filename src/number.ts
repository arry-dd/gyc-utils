/**
 * @description 数字超过某个阈值，处理成x.xxw
 * @param num 要处理的数字
 * @param threshold 阈值
 * @param method 要使用的method方法
 * @returns x.xxw
 * @example
 * expect(formatNumOverTenhousand(20010, 20000, 'round')).toBe('2.00w');
 * expect(formatNumOverTenhousand(20010, 20000, 'ceil')).toBe('2.01w');
 * expect(formatNumOverTenhousand(20010, 20000, 'floor')).toBe('2.00w');
 */
export function formatNumOverTenhousand(
	num: number,
	threshold: number = 10000,
	method: 'round' | 'ceil' | 'floor' = 'round'
): string {
	if (Number(num) >= threshold) {
		return `${(Math[method](num / 100) / 100).toFixed(2)}w`;
	}
	return String(num);
}
