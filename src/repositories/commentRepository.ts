import { AppDataSource } from '../database/data-source'
import { Comment } from '../app/models/Coments'

export const commentRepository = AppDataSource.getRepository(Comment)
