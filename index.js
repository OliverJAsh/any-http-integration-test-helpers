/* jshint esnext: true, node: true */

import Q from 'q';
import http from 'http';

var stubServer;
var stubServerPort = process.env.STUB_SERVER_PORT;

if (! stubServerPort) {
    throw new Error('STUB_SERVER_PORT env var required');
}

var createStubServer = response => {
    // Re-assign shared var so we can close the connect inside `afterEach`
    stubServer = http.createServer((req, res) => {
        res.writeHead(response.status, response.headers);
        res.end(response.body);
    });

    return Q.ninvoke(stubServer, 'listen', stubServerPort);
};

var closeStubServer = () => Q.ninvoke(stubServer, 'close');

export { createStubServer, closeStubServer };
