const Helper = require('@codeceptjs/helper');

class EnvConfig extends Helper {

    static setApp() {
        return {
            // "env": process.env.AppEnv || "staging",
            "staging": {
                "url": ""
            },
            "production": {
                "url": "https://oranum.com/en/home"
            }
        }
    }
}

module.exports = EnvConfig;