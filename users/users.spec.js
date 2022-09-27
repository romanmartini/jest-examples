const axios = require('axios').default;
const { Users } = require('./users');

jest.mock('axios');

test('should fetch users', async () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  const res = await Users.all(true);
  console.log(res)

  return Users.all(false).then(data => expect(data).toEqual(users));
});