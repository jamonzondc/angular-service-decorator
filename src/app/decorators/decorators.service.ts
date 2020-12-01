import { Injectable } from "@angular/core";
import { User } from "../user.model";
import { UserService } from "../user.service";

/*
Como un servicio solo se puede inyectar en servicios, componentes o modulos de angular
los decoradores de typescript no forman parte de esto
por tanto hau que inyectar este servicio en el modulo para tenerlo de manera static en cualquier lado.
*/
@Injectable({
  providedIn: "root"
})
export class DecoratorService {
  private static userService: UserService | undefined = undefined;

  public constructor(service: UserService) {
    DecoratorService.userService = service;
  }
  public static getUserService(): UserService {
    if (!DecoratorService.userService) {
      throw new Error("DecoratorService not initialized");
    }
    return DecoratorService.userService;
  }
}
