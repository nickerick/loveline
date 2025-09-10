import { UserService } from "../domain/user/UserService";
import { TelepactHttpService } from "./TelepactHttpService";

export const telepactService = new TelepactHttpService(
  "http://192.168.0.15:8082",
);
export const userService = new UserService(telepactService.client);
