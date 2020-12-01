import { DecoratorService } from "./decorators.service";

export function preLoad(id: number) {
  return function(target, propertyKey): any {
    Object.defineProperty(target, propertyKey, {
      configurable: false,
      get: () => DecoratorService.getUserService().getUser(id)
    });
  };
}
