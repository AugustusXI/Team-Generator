const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  it("should create a new engineer", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });

  it("should get the Github Repo", () => {
    const engineer = new Engineer("Rushu");
    expect(engineer.getName()).toEqual(expect.any(String));
  });

  it("should return the engineer's ID", () => {
    const engineer = new Engineer("Rushu", 1);
    expect(engineer.getId()).toEqual(expect.any(Number));
  });

  it("should return the engineer's Email", () => {
    const engineer = new Engineer("Rushu", 1, "focus@verydistracted.com");
    expect(engineer.getEmail()).toEqual(
      expect.stringContaining(engineer.email.toString())
    );
  });

  it("should return the engineer's role", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
