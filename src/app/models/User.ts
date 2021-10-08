// export interface User {
//   id?: number;
//   name: string;
//   surname: string;
//   email: string;
// }

export class User {
  id?: number;
  name: string;
  surname: string;
  email: string;

  constructor(id: number, name: string, surname: string, email: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
}
