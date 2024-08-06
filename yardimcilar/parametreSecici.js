/**
 * Girilen metne göre seçilen indiste ki içeriği döndürür.
 * @param {string} content 
 * @param {number} index 
 */
function getParamByIndex(content, index) {
    let args = content.trim().split(" ");
    try {
        return args[index];
    } catch (err) {
        console.error(`Parametre döndürme hatası: ${err}`);
    }
}

/**
 * Girilen metne göre seçilen indisten sonra ki bütün içeriği döndürür.
 * @param {string} content 
 * @param {number} index 
 */
function getContentByIndex(content, index) {
    let args = content.trim().split(" ");
    try {
        return args.slice(index).join(" ");
    } catch (err) {
        console.error(`Parametre döndürme hatası: ${err}`);
    }
}

module.exports = {
    getParamByIndex,
    getContentByIndex
}