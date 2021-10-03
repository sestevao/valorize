import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateUser {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUser) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //check if email exists
    const userExists = await usersRepositories.findOne({ email });
    if (!userExists) {
      throw new Error("Email/Password incorrect!");
    }

    //check if password is correct
    const passwordMatch = await compare(password, userExists.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!");
    }

    //then generate token
    const token = sign(
      {
        email: userExists.email,
      },
      "8e93b3516b0fdffd2f5f446b52a6a8c4",
      {
        subject: userExists.id,
        expiresIn: "18d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
