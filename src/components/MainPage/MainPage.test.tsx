import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import MainPage from './MainPage';

describe('MainPage component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const mockProps = {
            isPending: false,
            onRequestRobots: jest.fn(),
            onSearchChange: jest.fn(),
            robots: [],
            searchField: ''
        };
        wrapper = shallow(<MainPage {...mockProps} />);
    });

    it('should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should filter robots correctly', () => {
        const mockProps2 = {
            isPending: false,
            onRequestRobots: jest.fn(),
            onSearchChange: jest.fn(),
            robots: [{
                email: 'john@gmail.com',
                id: '3',
                name: 'John'
            }],
            searchField: 'John'
        };
        let instance: any = wrapper.instance();
        expect(instance.filterRobots()).toEqual([]);
        const wrapper2 = shallow(<MainPage {...mockProps2} />);
        instance = wrapper2.instance();
        expect(instance.filterRobots()).toEqual(mockProps2.robots);
    });
});