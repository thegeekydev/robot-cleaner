import { RobotCleaner} from "@app/Robot";

describe("Robot cleaner", () => {
  describe("initialization", () => {
    it("should create the robot", () => {
      const robot = new RobotCleaner();
      expect(robot).toBeTruthy();
    });
  });
});