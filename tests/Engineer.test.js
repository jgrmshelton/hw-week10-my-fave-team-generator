const Engineer = require("../lib/Engineer");

describe("Object Instantiation", () => {
  it("Should create an object with name, id, email and github properties", () => {
    const developer = new Engineer(
      "Tino",
      3456,
      "example@example.com",
      "TinoTC"
    );
    expect(developer).toEqual({
      fullName: "Tino",
      id: 3456,
      email: "example@example.com",
      github: "TinoTC",
    });
  });
  describe("Defining the getRole method for Engineer Class", () => {
    it("Should utilize polymorphism to create another implementation for the getRole method specifically for the 'Engineer' class", () => {
      const developer = new Engineer(
        "Tino",
        3456,
        "example@example.com",
        "TinoTC"
      );
      const jobRole = developer.getRole("Engineer");
      expect(jobRole).toEqual("Engineer");
    });
  });
  describe("Return github username for Engineer class", () => {
    it("Should return the github username", () => {
      var developer = new Engineer(
        "Tino",
        3456,
        "example@example.com",
        "TinoTC"
      );
      const getGithub = developer.github;
      expect(getGithub).toEqual(developer.github);
    });
  });
});
