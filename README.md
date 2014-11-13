# AnyHTTP Integration Test Helpers

Example usage:

``` js
import { createStubServer, closeStubServer } from 'any-http-integration-test-helpers';

describe('Http integration', () => {
    afterEach(closeStubServer);

    it('should make the request and resolve if the response has a good status code', () =>
        createStubServer({ status: 200, headers: {}, body: 'foo' })
            .then(() => {
                // …
            }));
});
```
