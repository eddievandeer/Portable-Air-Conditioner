export const set = <T, K extends keyof T>(o: T, name: K, value: any): void => {
    o[name] = value
}

export const get = <T, K extends keyof T>(o: T, name: K): T[K] => {
    return o[name]
}