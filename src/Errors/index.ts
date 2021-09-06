import type { logger } from "../Types";
import { inspect } from "../inspect";

export type references = {
  [name: string]: any;
};
abstract class SuperError extends Error {
  /**
   *
   * @param references that will be loged or returned to the user somehow
   */
  constructor(readonly references: references, private logger: logger) {
    super();
  }
  /**
   * Get a references string
   * @returns
   */
  private getReferencesString(): string {
    return inspect(this.references);
  }
  /**
   * Sends the error message through a log system.
   */
  abstract log(): Promise<void>;
  /**
   * Prints the error message in console.
   */
  abstract console_log(): Promise<void>;
}

/**
 * An error that can be exposed to the user (ex: validation error, generic server error)
 */
export abstract class PublicError extends SuperError {
  /**
   *
   * @param references that will be printed with log or returned to the user
   */
  constructor(references: any, logger: logger) {
    super(references, logger);
  }
}

/**
 * An error that can't be exposed to the user (ex: database error)
 */
export abstract class PrivateError extends SuperError {
  constructor(references: any, logger: logger) {
    super(references, logger);
  }
}
