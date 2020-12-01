import { Component, Input } from "@angular/core";
import { preLoad } from "./decorators/pre-load.decorator";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ user | json }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @preLoad(2)
  user: User;
  constructor(public userService: UserService) {}
}
