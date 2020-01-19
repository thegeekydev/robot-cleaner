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

  it("should accepts 10,000 commands", () => {
    const commandFactory = new CommandFactory();

    commandFactory.AddCommand("10000");
    commandFactory.AddCommand("0 0");
    for (let i = 0; i < 10000; i++) {
      commandFactory.AddCommand("W 1");
    }

    expect(commandFactory.CommandsAreComplete()).toBeTruthy();
  });

  it("should not allows lesser than the limit", () => {
    const commandFactory = new CommandFactory();

    commandFactory.AddCommand("-1");
    commandFactory.AddCommand("0 0");
    for (let i = 0; i < 10000; i++) {
      commandFactory.AddCommand("W 1");
    }

    expect(commandFactory.CommandsAreComplete()).toBeTruthy();
  });

  it("should not allows higher than the limit", () => {
    const commandFactory = new CommandFactory();

    commandFactory.AddCommand("11000");
    commandFactory.AddCommand("0 0");
    for (let i = 0; i < 20000; i++) {
      commandFactory.AddCommand("W 1");
    }

    expect(commandFactory.CommandsAreComplete()).toBeTruthy();
  });

  it("should be in the correct position", () => {
    const commandFactory = new CommandFactory();

    commandFactory.AddCommand("1");
    commandFactory.AddCommand("20 30");
    commandFactory.AddCommand("W 1");

    expect(commandFactory.startPosition.x).toEqual(20);
    expect(commandFactory.startPosition.y).toEqual(30);
  });
});
