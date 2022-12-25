export const normalizeString = (string: string) => {

    const regex = /[^A-Za-z0-9]/g;
    const newString = string.replace(regex, "-");
    return newString.replace(/--/g, "-")
}