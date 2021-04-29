const gameNumber = require("./randomNumber");

const newTestArray = [0,1,2,3,4,5,6,7,8,9]

test("return random number that is greater or iqual than first number from the array", () => {
    expect(gameNumber(newTestArray)).toBeGreaterThanOrEqual(0);
})

test("return random number that is smaller or iqual than last number from the array", () => {
    expect(gameNumber(newTestArray)).toBeLessThanOrEqual(newTestArray.length);
})