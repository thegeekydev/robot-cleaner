export class CommandFactory {
  _numberOfCommands: number = 0;

  constructor() {}

  AddCommand(command: string): void {
    this._numberOfCommands++;
  }

  InputsAreComplete(): boolean {
    return this._numberOfCommands === 4 ? true : false;
  }
}
