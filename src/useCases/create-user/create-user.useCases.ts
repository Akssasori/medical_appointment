
type UserRequest = {
    name:string,
    username:string,
    password: string
}

export class CreateUserCase {

    async execute (data: UserRequest) {

    }
}