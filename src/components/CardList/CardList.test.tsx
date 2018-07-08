import { shallow } from 'enzyme';
import * as React from 'react';

import { CardList } from './CardList';

describe('CardList component', () => {
    it('should shallowly render component', () => {
        const mockRobots = [
            {
                email: 'john@gmail.com',
                id: '1',
                name: 'John Snow'
            }
        ];
        expect(shallow(<CardList robots={mockRobots} isPending={false} />)).toMatchSnapshot();
    });
});