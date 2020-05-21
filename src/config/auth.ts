export default {
  jwt: {
    secret: process.env.APP_SECRET ?? '4a9a809ba8c5f36b3d9639b336501bc3',
    expiresIn: '1d',
  },
};
