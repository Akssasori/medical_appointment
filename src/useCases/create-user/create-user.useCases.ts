import { User } from "../../entities/user.entity";
import { ParameterRequiredError } from "../../errors/parameter-required.error";
import { UserRepository } from "../../repositories/user.repostory"

type UserRequest = {
    name:string,
    username:string,
    password: string
}

export class CreateUserCase {
    async execute (data: UserRequest) {
        const userRepository = new UserRepository();

        if (!data.username || !data.password) {
            throw new ParameterRequiredError('Username/password is required.', 422);
        }

        const existUser = await userRepository.findByUsername(data.username);

        if(existUser) {
            throw new ParameterRequiredError('Username already exists')
        }

        const user = User.create(data);

        const userCreated = await userRepository.save(user);
        
        return userCreated;
    }
}