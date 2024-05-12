import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Taksscategoria {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    description: string;
  
    @Column()
    color: string;
     
}
