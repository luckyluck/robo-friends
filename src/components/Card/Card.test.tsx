import { shallow } from 'enzyme';
import * as React from 'react';
import Card from './Card';

describe('Card component', () => {
    const defaultProps = {
        email: '',
        id: '',
        name: ''
    };
    it('should shallowly render component', () => {
        expect(shallow(<Card {...defaultProps}/>)).toMatchSnapshot();
    });

    it('should shallowly render 1 component', () => {
        expect(shallow(<Card {...defaultProps}/>).length).toEqual(1);
    });
});