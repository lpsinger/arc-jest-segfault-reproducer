const sandbox = require("@architect/sandbox");

beforeAll(async () => {
  await sandbox.start();
});

afterAll(async () => {
  await sandbox.end();
});

describe("Architect", () => {
  it("does not crash", () => {
    expect(1 + 1).toBe(2);
  });
});
