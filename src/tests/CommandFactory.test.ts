import { CommandFactory } from "@app/CommandFactory";

describe("Command Factory", () => {
  it("should be initialize", () => {
    const commandFactory = new CommandFactory();
    expect(commandFactory).toBeTruthy();
  });

  it("should accept inputs", () => {
    const commandFactory = new CommandFactory();

    commandFactory.AddCommand("1");
    commandFactory.AddCommand("0 0");
    commandFactory.AddCommand("E 2");

    expect(commandFactory.CommandsAreComplete()).toBeTruthy();
  });

  it("should check the numbers of commands are correct", () => {
    const commandFactory = new CommandFactory();

    commandFactory.AddCommand("4");
    commandFactory.AddCommand("0 0");
    commandFactory.AddCommand("E 2");
    commandFactory.AddCommand("W 1");
    commandFactory.AddCommand("E 2");
    commandFactory.AddCommand("W 1");

    expect(commandFactory.CommandsAreComplete()).toBeTruthy();
  });
});
