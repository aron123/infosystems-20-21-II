import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';

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

    @ManyToMany(() => Category, category => category.products, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    categories: Category[];
}