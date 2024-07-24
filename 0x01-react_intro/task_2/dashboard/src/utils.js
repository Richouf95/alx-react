export const getFullYear = () => {
    const date = new Date().getFullYear();
    return date;
}

export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}