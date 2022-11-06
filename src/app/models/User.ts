import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'
import { Comment } from './Comment'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @OneToMany(() => Comment, comment => comment.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  comment: Comment[]
}
