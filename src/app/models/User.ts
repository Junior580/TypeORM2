import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { Comment } from './Coments'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: string

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

  @OneToOne(() => Comment)
  @JoinColumn()
  comment: Comment
}
