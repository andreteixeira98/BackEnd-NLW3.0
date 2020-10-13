import express from 'express';
import './database/conection';
import {getRepository} from 'typeorm';
import Ophanage from './models/orphanage';

const app = express();
app.use(express.json());

app.post('/orphanages', async(req,res)=>{
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        opening_on_weekends
    } = req.body;

    const orphanageRepository = getRepository(Ophanage);
    const orphanage = orphanageRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        opening_on_weekends
    });

    await orphanageRepository.save(orphanage);

    return res.json({message:'hello world'});
});

app.listen(3333);