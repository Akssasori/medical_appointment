import { Request, Response } from "express";
import { CreateUserCase } from "./create-user.useCases";
import { logger } from "../../utils/logger";

export class CreateUserController {

    async handle(request: Request, response: Response) {
        logger.info('Usuário sendo criado!');
        try {
            const data = request.body;

            const useCase = new CreateUserCase();
            const result = await useCase.execute(data);

            return response.json(result);
        } catch (err: any) {
            logger.error(err.stak)
            return response.status(400).json(err.message);

        }
    }
}