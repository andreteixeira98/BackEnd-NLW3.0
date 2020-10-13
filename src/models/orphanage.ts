import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('ophanages')
export default class Orphanade{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: String;

    @Column()
    latitude:number;

    @Column()
    longitude:number;

    @Column()
    about:String;
    @Column()
    instructions: String;

    @Column()
    opening_hours:String;

    @Column()
    opening_on_weekends:boolean;
}