import { Comment } from '../app/models/Comment'
import { AppDataSource } from '../database/data-source'
export const commentRepository = AppDataSource.getRepository(Comment)
