import type { logger } from "../Types";
export declare type references = {
    [name: string]: any;
};
declare abstract class SuperError extends Error {
    readonly references: references;
    private logger;
    constructor(references: references, logger: logger);
    private getReferencesString;
    abstract log(): Promise<void>;
    abstract console_log(): Promise<void>;
}
export declare abstract class PublicError extends SuperError {
    constructor(references: any, logger: logger);
}
export declare abstract class PrivateError extends SuperError {
    constructor(references: any, logger: logger);
}
export {};
