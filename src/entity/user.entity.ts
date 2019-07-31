import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string;

  @Column('text')
  password: string;

  @Column()
  name: string;

  @Column()
  mobile: string;

  @Column()
  role: number;

  @Column()
  add_by: string;

  @Column()
  updated_by: string;

  @Column()
  created_time: string;

  @Column()
  updated_time: string;
}
