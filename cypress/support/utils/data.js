import { faker, fakerPT_BR } from "@faker-js/faker";

export const credentials = {
  standardUser: "standard_user",
  lockedOut: "locked_out_user",
  problemUser: "problem_user",
  performanceGlitch: "performance_glitch_user",
  visualProblem: "visual_user",
  password: "secret_sauce",
  wrongPassword: "unsecret_sauce",
};

export const baseUrl = "https://www.saucedemo.com/";

export const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  Address: {
    cep: faker.location.zipCode(),
  },
};
