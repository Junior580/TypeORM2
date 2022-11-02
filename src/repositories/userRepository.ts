import { User } from '../app/models/User'
import { AppDataSource } from '../database/data-source'
export const userRepository = AppDataSource.getRepository(User)
