# 🚀 NLW Valorize (Next Level week - 6th edition) 🚀

![banner](https://user-images.githubusercontent.com/61299540/123202984-020f5000-d48c-11eb-8c12-38af40aae04e.png)

[![nodejs-badge][nodejs-img]][nodejs]

[nodejs-img]: https://img.shields.io/badge/Node.js-v14.17-green
[nodejs]: https://nodejs.org/en/

### Project status: Finished✅

# 📌 Description 📌

**Valorize** allow to register common users and admin users, tags and compliments between users. The app has friendly errors, use JWT to logins, validation, also a simple versioning was made.

# 💻 Technologies 💻

- **[Node.js](https://nodejs.org/en/)** Download the recommended LTS version.
- **[Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)** Package manager, similar to Node.js npm.
- **[Express](https://expressjs.com/pt-br/)** Framework to develop backend with Node.js.
- **[TypeScript](https://www.typescriptlang.org/)** It's JavaScript with data typing and additional features, aimed at the server side.
- **[Beekeeper](https://www.beekeeperstudio.io/)** Database Manager and SQL code editor.
- **[Insomnia](https://insomnia.rest/)** It's a program that tests the requests of an API (_GET, POST, PUT, DELETE, PATCH, etc_).

# ✅ Execution ✅

```bash
# Clone this repository
$ git clone https://github.com/sestevao/valorize
# Run migrations
$ yarn migration:run
# Run application
$ yarn dev
```

The server will start on port `:3000`. Access the URL in your browser **http://localhost:3000/**_rotas GET_.

Note: browsers only support GET method requests. Download [Imsomnia](https://insomnia.rest/download) to test all routes.

# ➡️ Current project routes ➡️

**POST**

- `/tags` -> create new tags
- `/users` -> create new user
- `/login` -> authenticate user
- `/compliments` -> register compliment (administrator)

**GET**

- `/tags` -> list registered tags
- `/users` -> list all registered users
- `/users/compliments/send` -> list compliments sent
- `/users/compliments/receive` -> list of compliments received

# 📜 Project rules 📜

**User registration**

- [ ] It's not allowed to register more than one user with the same email
- [ ] It's not allowed to register user without e-mail

**TAG Registration**

- [ ] It's not allowed to register tag without a name
- [ ] It's not allowed to register more than one tag with the same name
- [ ] Registration by users who are not administrators is not allowed

**Registration of compliments**

- [ ] A user isn't allowed to register a compliment for themselves
- [ ] It's not allowed to register compliments for invalid users
- [ ] User must be authenticated in the application
