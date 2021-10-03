import { Router } from "express";

import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiveComplimentController";
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ListUsersController } from "./controllers/ListUSersController";
import { ListTagsController } from "./controllers/ListTagsController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

const listUserSendComplimentController = new ListUserSendComplimentController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const listUserReceiveComplimentController =
  new ListUserReceiveComplimentController();

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get("/users/compliments/send", listUserSendComplimentController.handle);
router.get(
  "/users/compliments/receive",
  listUserReceiveComplimentController.handle
);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };
