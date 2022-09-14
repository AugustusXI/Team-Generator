const Manager = require("../lib/Manager");
describe("Manager", () => {
  it("should create a new Manager", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

  it("should get the number of the manager's office", () => {
    const manager = new Manager("Kaladin", 1, "storm@blessed.com", 4);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  });

  it("should return the manager's ID", () => {
    const manager = new Manager("Kaladin", 1);
    expect(manager.getId()).toEqual(expect.any(Number));
  });

  it("should return the Manager's Email", () => {
    const manager = new Manager("Kaladin", 1, "storm@blessed.com");
    expect(manager.getEmail()).toEqual(
      expect.stringContaining(manager.email.toString())
    );
  });

  it("should return the manager's role", () => {
    const manager = new Manager();
    expect(manager.getRole()).toEqual("Manager");
  });
});
