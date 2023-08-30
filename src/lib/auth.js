const Credentials = require("next-auth/providers/credentials");

module.exports = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'e-mail' },
        password: { label: 'Password', type: 'password' },
        username: {label: 'Name', type: 'text', placeholder: 'Seu nome'}
      },
      async authorize(credentials, req) {
        const user = { email: 'teste@dd101.com', password: '123456', name: 'Teste' };
        
        return user;
      }
    })
  ]
};