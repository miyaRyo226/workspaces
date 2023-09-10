import { execSync } from 'child_process';

process.env.DATABASE_URL = `${process.env.DATABASE_URL}${process.env.JEST_WORKER_ID}`

beforeEach(()=> {
     execSync(`DATABASE_URL=${process.env.DATABASE_URL}${process.env.JEST_WORKER_ID} yarn prisma migrate reset --force --skip-seed --skip-generate`)
    });