import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCommentController } from '../controllers/CommentUserController'
import { GetCommentController } from '../controllers/GetCommentController'

export const commentRoutes = Router()

commentRoutes.post(
  '/:id',
  ensureAuthenticated,
  new CreateCommentController().handle
)

commentRoutes.get('/', new GetCommentController().handle)
