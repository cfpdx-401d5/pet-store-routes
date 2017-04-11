/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import Navigation from '../src/components/Navigation';

describe('Full Navigation', () => {
    it('Navigation bar', () => {
        const rendered = shallow(<Navigation />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});