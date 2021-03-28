const HapiServer = require("@hapi/hapi").Server;
const Routes = require("./routes.js")

class Server {

    static async init() {

        const server = HapiServer({ port: 8081 , host: '0.0.0.0' })

        server.route(Routes);

        await server.start();

        console.log('Server running on %s', server.info.uri);
    }
}

module.exports = Server