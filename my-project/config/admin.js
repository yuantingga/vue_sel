module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b7728df3cbd43c908b8d74e64764df2'),
  },
});
