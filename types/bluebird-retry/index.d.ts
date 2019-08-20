// Type definitions for bluebird-retry 0.11
// Project: https://github.com/demmer/bluebird-retry
// Definitions by: Pascal Vomhoff <https://github.com/pvomhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import Promise = require('bluebird');

declare function retry<T, R>(func: (param: T) => R, options?: retry.Options<T>): Promise<R>;

declare namespace retry {
    interface Options<T> {
        interval?: number;
        backoff?: number;
        max_interval?: number;
        timeout?: number;
        max_tries?: number;
        predicate?: any;
        throw_original?: boolean;
        context?: any;
        args?: T[];
    }

    class StopError extends Error {}
}

export = retry;
