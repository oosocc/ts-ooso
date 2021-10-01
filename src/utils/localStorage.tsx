/**
 * 智能地从本地存储读取值
 */
export function localStorageGet(name: string, defaultValue = ''): string {
    const valueFromStore = localStorage.getItem(name);
    if (valueFromStore === null) return defaultValue; // No value in store, return default one

    try {
        const jsonParsed = JSON.parse(valueFromStore);
        if (['boolean', 'number', 'bigint', 'string', 'object'].includes(typeof jsonParsed)) {
            return jsonParsed; // We successfully parse JS value from the store
        }
    } catch (error) {}

    // console.log(`localStorageGet(${name}) - result:`, valueFromStore)
    return valueFromStore; // 按原样返回字符串值
}

/**
 * 智能地将值写入本地存储
 */
export function localStorageSet(name: string, value: any) {
    let valueAsString: string;
    if (typeof value === 'object') {
        valueAsString = JSON.stringify(value);
    } else {
        valueAsString = String(value);
    }

    localStorage.setItem(name, valueAsString);
    // console.log(`localStorageSet(${name}, ${valueAsString})`);
}

/**
 * 按名称从localStorage中删除值，如果指定的名称为空，则清除localStorage。
 */
export function localStorageDelete(name: string) {
    // console.log(`localStorageDelete(${name})`);
    if (name) {
        localStorage.removeItem(name);
    } else {
        localStorage.clear();
    }
}
