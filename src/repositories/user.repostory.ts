import { User } from "../entities/user.entity";


export class UserRepository {

    users: User[] = [];

    async findByUsername(username: string) {
        const name = this.users.forEach((user) => console.log(user))
        return this.users.find(user => user.username === username);
    }

    async save(data: User) {
        this.users.push(data)
        return data;
    }
}