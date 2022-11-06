import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { User } from './User'

@Entity('Comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  comment: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.comment)
  @JoinColumn({ name: 'user_id' })
  user: User
}
