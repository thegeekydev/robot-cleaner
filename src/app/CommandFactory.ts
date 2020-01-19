export class CommandFactory {
  _numberOfCommands: number = 0;
  _commandsList: Array<string> = [];

  constructor() {}

  AddCommand(command: string): void {
    if (!this.CommandsAreComplete()) {
      if (this._commandsList.length === 0) {
        this.SetNumberOfCommands(command);
      }
      this._commandsList.push(command);
    }
  }

  CommandsAreComplete(): boolean {
    return this._commandsList.length == this._numberOfCommands + 2
      ? true
      : false;
  }

  private SetNumberOfCommands(command: string): void {
    this._numberOfCommands = Number(command);
    if (this._numberOfCommands < 0) {
      this._numberOfCommands = 0;
    }
    if (this._numberOfCommands > 10000) {
      this._numberOfCommands = 10000;
    }
  }
}
