it("只有B属于金盾版本标志", () => {
  const boolean = require("../src/boolean").default

  expect(boolean("B").toBeTruthy)
})
