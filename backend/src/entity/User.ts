import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Product } from './Product';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Product, product => product.uploader)
    products: Product[];

}
