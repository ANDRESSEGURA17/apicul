import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Takssstatuss {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}

