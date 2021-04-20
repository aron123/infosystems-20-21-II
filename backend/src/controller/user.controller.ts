import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Controller } from "./controller";

export class UserController extends Controller {
    repository = getRepository(User);
}
