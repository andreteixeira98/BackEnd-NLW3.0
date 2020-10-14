import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Orphanage from '../models/Orphanage';
export default{
    async index(request:Request, response:Response){
        const orphanageRepository = getRepository(Orphanage);
        
        const orphanade = await orphanageRepository.find();
        return response.json(orphanade);
    },
    async show(request:Request, response:Response){
        const {id} = request.params;
        const orphanageRepository = getRepository(Orphanage);
        
        const orphanades = await orphanageRepository.findOneOrFail(id);
        return response.json(orphanades);
    },
    async create(request:Request, response:Response){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            opening_on_weekends
        } = request.body;
    
        const orphanageRepository = getRepository(Orphanage);
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
        return response.status(201).json(orphanage);
    }
}