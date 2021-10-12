<div align="center">
  <h1>🚀 NLW Valorize 🚀</h1>
  <pre>🙌 It is a system of praise between users through tags 🙌</pre>  
</div>

## 💻 About the project

**Valorize** allow to register common users and admin users, tags and compliments between users. The app has friendly errors, use JWT to logins, validation, also a simple versioning was made.

Application built on the Node.js track from Next Level Week NLW#05 from @rocketseat during April 19-25, 2021.

![banner](https://user-images.githubusercontent.com/61299540/123202984-020f5000-d48c-11eb-8c12-38af40aae04e.png)

## 🛠️ Features

- [x] User registration
- [x] Tag Registration (possible compliments)
  - [x] Admin user only
- [x] Praise registration
  - [x] User ID who will receive praise
  - [x] User ID sending the compliment
  - [x] tag id
  - [x] Creation date
- [x] User authentication
  - [x] Generate JWT Token
  - [x] Validate user logged on necessary routes
- [x] User Listing
- [x] Tag listing
- [x] Listing of compliments by user

## 🚀 Requirements

- [Node.js](https://nodejs.org/en/)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [TypeScript](https://www.typescriptlang.org/)
- [Beekeeper](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/)

## ✨ Technologies

- [Express](https://expressjs.com/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [uuid](https://www.npmjs.com/package/uuidv4)
- [bcryptjs](https://openbase.com/js/bcryptjs/documentation)
- [dotenv](https://github.com/motdotla/dotenv)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [reflect-metadata](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [sqlite3](https://www.sqlitetutorial.net/sqlite-nodejs/)
- [typeorm](https://typeorm.io/#/)
- [cors](http://expressjs.com/en/resources/middleware/cors.html)
- [class-transformer](https://github.com/typestack/class-transformer)

## ➡️ Current project routes

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

## 📌 Project rules

**User registration**

```
- It's not allowed to register more than one user with the same email
- It's not allowed to register user without e-mail
```

**TAG Registration**

```
- It's not allowed to register tag without a name
- It's not allowed to register more than one tag with the same name
- Registration by users who are not administrators is not allowed
```

**Registration of compliments**

```
- A user isn't allowed to register a compliment for themselves
- It's not allowed to register compliments for invalid users
- User must be authenticated in the application
```

## ✅ Getting started

After cloning the project, you need to update the dependencies.

```bash
# Clone this repository
$ gh repo clone sestevao/valorize

# Run migrations
$ yarn typeorm migration:run

# Run application
$ yarn dev

output: Server is running...
```

The server will start on port `:3000`. Access the URL in your browser **http://localhost:3000/**_rotas GET_.

Note: browsers only support GET method requests. Download [Imsomnia](https://insomnia.rest/download) to test all routes.

## 🔥 Additional functionalities

- Enviar e-mail para usuário que receber elogio
- Colocar em produção
- Criar um front-end
- Adicionar Cors no Express (cors - @types/cors - app.use(cors()))
- Upload de imagem/avatar

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

---

<p align="center"><sub>made with 💜 by sestevao</sub></p>

