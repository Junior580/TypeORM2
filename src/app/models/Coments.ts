import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  comment: string
}
