import { PatientService } from './patient.service';
import { Patient } from './patient.entity';
export declare class PatientController {
    private service;
    constructor(service: PatientService);
    findAll(): Promise<Patient[]>;
    findOne(id: number): Promise<Patient | null>;
    create(data: Partial<Patient>): Promise<Patient>;
    update(id: number, data: Partial<Patient>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
