import { prisma } from './prisma-client';
import { PrismaClient } from '@prisma/client';

describe('prisma client', () => {
    it('should be an instance of PrismaClient', () => {
        expect(prisma).toBeInstanceOf(PrismaClient);
    });

    it('should be defined', () => {
        expect(prisma).toBeDefined();
    });
});
