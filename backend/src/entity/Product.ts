import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ type: 'float' })
    price: number;

    @Column()
    imgUrl: string;

    @Column()
    brand: string;
}
