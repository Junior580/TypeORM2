import { User } from "../app/models/User";
import { userRepository } from "../repositories/userRepository";

interface IGet {
    id: string;
}

export class GetUserService {
    public async execute({ id }: IGet): Promise<User> {
        const user = await userRepository.findOneBy({ id });

        if (!user) {
            throw new Error("User does not exists!");
        }

        return user;
    }
}
