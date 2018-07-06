import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component', () => {
    it('should shallowly render component', () => {
        expect(shallow(<Card/>)).toMatchSnapshot();
    });

    it('should shallowly render 1 component', () => {
        expect(shallow(<Card/>).length).toEqual(1);
    });
});