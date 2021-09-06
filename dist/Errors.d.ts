declare type references = {
    [name: string]: any;
};
export declare abstract class SuperError extends Error {
    references: references;
    private getReferencesString;
    abstract log(): void;
    abstract console_log(): void;
}
export {};
