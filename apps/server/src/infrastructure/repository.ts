import { UserRepository } from "../data/repositories/UserRepository";
import { db } from "./db";

export const userRepository = new UserRepository(db);
