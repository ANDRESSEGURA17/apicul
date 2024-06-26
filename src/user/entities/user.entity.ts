import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column({
    unique:true
  }) 
  email: string;

  @Column()
  gender: string;

  @Column({ default: true })
  isActive: boolean;

}
