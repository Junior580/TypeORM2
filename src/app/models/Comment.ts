import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { User } from './User'

@Entity('comments')
export class Comment {
  @PrimaryColumn()
  id: string

  @Column()
  comments: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.comment)
  user: User
}
