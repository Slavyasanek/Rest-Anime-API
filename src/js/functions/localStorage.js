export const getItemLocal = (key) => {
    return localStorage.getItem(key);
}
export const setItemLocal = (key, value) => {
    return localStorage.setItem(key, value);
}

export const removeItemLocal = (key) => {
    return localStorage.removeItem(key);
}