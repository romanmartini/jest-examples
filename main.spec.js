const { sum } = require("./main")


test('test', () => {
    const data_1 = { nanme: 'roman' }
    const data_2 = { nanme: 'roman' }
    expect(data_1).not.toBe(data_1);
});