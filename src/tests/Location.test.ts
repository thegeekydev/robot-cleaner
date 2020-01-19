import Location from "@app/Location";

describe("Location", () => {
  it("should be initialize with correct position", () => {
    const location = new Location(10, 20);

    expect(location.x).toEqual(10);
    expect(location.y).toEqual(20);
  });
});
