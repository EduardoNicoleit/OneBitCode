const Database = require("./Database")

module.exports = class App {
    static #database = new Database()
}
