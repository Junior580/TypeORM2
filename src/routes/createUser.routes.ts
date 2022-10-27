import { Router, Request, Response } from "express";
import { CreateUserSerice } from "../services/CreateUserService";

export const createUser = Router();

createUser.get("/", (req: Request, res: Response) => {
    return res.json({ msg: "teste" });
});

createUser.post("/", async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const CreateUser = new CreateUserSerice();
        const user = await CreateUser.execute({ name, email, password });
        const { password: _, ...userReturn } = user;
        return res.status(201).json(userReturn);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json(error.message);
        }
    }
});
