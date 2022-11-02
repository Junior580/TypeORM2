import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('user')
export class User {
  @PrimaryColumn()
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
}
