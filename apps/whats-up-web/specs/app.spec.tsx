import React from 'react';
import { render } from '@testing-library/react';

import Page from '../src/app/page';
import { prismaMock } from './jest-prisma-client';

describe('Page', () => {
    it('should render successfully', async () => {
        prismaMock.event_tag.findMany.mockResolvedValue([])
        prismaMock.event.findMany.mockResolvedValue([])

        const result = await Page();
        const { baseElement } = render(result);
        expect(baseElement).toBeTruthy();
    });
});
