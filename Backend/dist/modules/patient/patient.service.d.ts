import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
export declare class PatientService {
    private repo;
    constructor(repo: Repository<Patient>);
    findAll(): Promise<Patient[]>;
    findOne(id: number): Promise<Patient | null>;
    create(data: Partial<Patient>): Promise<Patient>;
    update(id: number, data: Partial<Patient>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
