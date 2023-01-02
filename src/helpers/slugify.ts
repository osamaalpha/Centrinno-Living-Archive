export const slugify = (string: string) => {

    const regex = /\s+/g;
    const newString = string.replace(regex, "-");
    return newString.replace(/--/g, "-").toLowerCase()
}