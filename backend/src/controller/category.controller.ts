import { getRepository } from "typeorm";
import { Category } from "../entity/Category";
import { Controller } from "./controller";

export class CategoryController extends Controller {
    repository = getRepository(Category);
}
