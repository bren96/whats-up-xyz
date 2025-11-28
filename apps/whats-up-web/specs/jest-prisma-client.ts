import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import { prisma } from '@libs/whats-up-prisma';

jest.mock('@libs/whats-up-prisma', () => ({
    __esModule: true,
    prisma: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
    mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>