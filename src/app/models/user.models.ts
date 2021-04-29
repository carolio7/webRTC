import { Address } from "./address.model";

export class User{

  constructor(public firstname: string,
              public lastname: string,
              public email: string,
              public Addresse: Address,
              public description: string,
              public dateBirth: string,
              public aliases?: string[],
                ) { }
}
