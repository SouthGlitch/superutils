type references = {
  [name: string]: any;
};
abstract class SuperError extends Error {
  references: references;

  /**
   * Get a references string
   * @returns 
   */
  private getReferencesString(): string {
    return JSON.stringify(this.references);
  }
  /**
   * Sends the error message through a log system.
   */
  abstract log(): void;
  /**
   * Prints the error message in console.
   */
  abstract console_log(): void;
}

export class BugAlert extends Error {
  public usefullData: any;
  constructor(usefullData: any) {
    let message = "Atention! There was a bug, prepare de debbuger!\n";
    message += `usefull data: \n${JSON.stringify(usefullData, null, 2)}`;
    super(message);
    this.name = "BugAlert";
    this.usefullData = usefullData;
  }
}

export class LostObject extends Error {
  constructor(slug: string) {
    const message = `${slug} no se encunetra en la base de datos`;
    super(message);
    this.message = message;
    this.name = "LostObject";
  }
}
