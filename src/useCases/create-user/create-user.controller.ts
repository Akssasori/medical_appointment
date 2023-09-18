import { Request, Response } from "express";
import { CreateUserCase } from "./create-user.useCases";

export class CreateUserController {

    async handle(request: Request, response: Response) {
        const data = request.body;

        const useCase = new CreateUserCase();
        const result = await useCase.execute(data);

        return response.json(result);
    }
}