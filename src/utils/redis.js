const { createClient } = require('redis');
const redisDB = createClient({
    socket: {
        host: '127.0.0.1',
        port: 6379
    }
})

redisDB.on('Error', (error) => {
    console.error('Redis error:',error)
})
// Connect once when the app starts
(async () => {
    if (!redisDB.isOpen) {
        await redisDB.connect();
    }
})();

module.exports = {
    setObj : async(id,obj) => await redisDB.set(id.toString(), JSON.stringify(obj)),
    getObj : async(id) => JSON.parse(await redisDB.get(id)),
    deleteObj : async(id) => await redisDB.delete(id.toString()),
    keys : async(pattern) => await redisDB.keys(pattern),
}
