const Intern = require("../dist/Intern");
describe("Intern", () => {
  it("should create a new Intern", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });

  it("should get the school of the intern", () => {
    const intern = new Intern(
      "The Lopen",
      1,
      "1arm@herdaz.com",
      "Urithiru Tech"
    );
    expect(intern.getSchool()).toEqual(expect.any(String));
  });

  it("should return the Intern's ID", () => {
    const intern = new Intern("The Lopen", 1);
    expect(intern.getId()).toEqual(expect.any(Number));
  });

  it("should return the Intern's Email", () => {
    const intern = new Intern("The Lopen", 1, "1arm@herdaz.com");
    expect(intern.getEmail()).toEqual(
      expect.stringContaining(intern.email.toString())
    );
  });

  it("should return the Intern's role", () => {
    const intern = new Intern();
    expect(intern.getRole()).toEqual("Intern");
  });
});
