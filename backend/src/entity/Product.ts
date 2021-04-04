import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    title: string;

    @Column({ nullable: true, type: 'text' })
    description: string;

    @Column({ type: 'float' })
    price: number;

    @Column({ nullable: true })
    imgUrl: string;

    @Column({ nullable: true })
    brand: string;
}