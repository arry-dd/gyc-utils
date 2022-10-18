/**
 * @description 格式化日期
 * @param value 指定日期
 * @param format 返回的日期样式模板
 * @return {string}
 * @example
 * formatDate();
 * formatDate(1666064012000);
 * formatDate(1666064012000, "h:m:s");
 * formatDate(1666064012000, "Y年M月D日");
 */
export function formatDate(
	value: string | number | Date = Date.now(),
	format = 'Y-M-D h:m:s'
): string {
	const formatNumber = (n: number): string => `0${n}`.slice(-2);
	const date = new Date(value);
	const formatList = ['Y', 'M', 'D', 'h', 'm', 's'];
	const resultList = [];
	resultList.push(date.getFullYear().toString());
	resultList.push(formatNumber(date.getMonth() + 1));
	resultList.push(formatNumber(date.getDate()));
	resultList.push(formatNumber(date.getHours()));
	resultList.push(formatNumber(date.getMinutes()));
	resultList.push(formatNumber(date.getSeconds()));
	let res = '';
	for (let i = 0; i < resultList.length; i += 1) {
		res = format.replace(formatList[i], resultList[i]);
	}
	return res;
}
