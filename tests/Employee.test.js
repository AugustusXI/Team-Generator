const Employee = require("../dist/Employee");
describe("Employee", () => {
  describe("Employee", () => {
    it("should create a new employee", () => {
      const employee = new Employee();
      expect(typeof employee).toBe("object");
    });

    it("should return the employee's name", () => {
      const employee = new Employee(
        "Sylfrena",
        1,
        "ancientDaughter@stormfather.com"
      );
      expect(employee.getName()).toEqual("Sylfrena");
    });

    it("should return the employee's ID", () => {
      const employee = new Employee(
        "Sylfrena",
        1,
        "ancientDaughter@stormfather.com"
      );
      expect(employee.getId()).toEqual(1);
    });

    it("should return the employee's Email", () => {
      const employee = new Employee(
        "Sylfrena",
        1,
        "ancientDaughter@stormfather.com"
      );
      expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
      );
    });

    it("should return the employee's role", () => {
      const employee = new Employee(
        "Sylfrena",
        1,
        "ancientDaughter@stormfather.com"
      );
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
