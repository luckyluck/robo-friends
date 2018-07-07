import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('MainPage component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
        };
        wrapper = shallow(<MainPage {...mockProps} />);
    });

    it('should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should filter robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'John',
            isPending: false
        };
        expect(wrapper.instance().filterRobots()).toEqual([]);
        const wrapper2 = shallow(<MainPage {...mockProps2} />);
        expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
    });
});