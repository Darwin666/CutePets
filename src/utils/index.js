/**
 * 深克隆对象
 * @param {object} obj - 需要被克隆的对象
 * @return 已被克隆的对象
 */
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}