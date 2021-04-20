import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { User } from './User';

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

    @ManyToOne(type => User, {
        eager: true,
        cascade: true
    })
    uploader: User;

    @ManyToMany(() => Category, category => category.products, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    categories: Category[];
}