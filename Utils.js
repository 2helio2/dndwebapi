module.exports = {
    baseUrl: 'http://dnd5eapi.co/api/',
    cacheTime: (days) => {
        return 86400000 * days;
    }
}