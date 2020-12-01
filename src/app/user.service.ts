import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[] = [
    {
      name: "A",
      old: 1
    },
    {
      name: "B",
      old: 2
    },
    {
      name: "C",
      old: 3
    }
  ];

  getUser(id: number): User {
    return this.users[id];
  }
}
