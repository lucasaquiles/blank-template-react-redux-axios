import React from 'react';
import { shallow, mount, render } from  'enzyme';
import configureStore from 'redux-mock-store';
import PaginatorComponent from '../PaginatorComponent';

const mockStore = configureStore();
const store = mockStore({});

describe('Paginator', () => {

    it('should render ', ()=> {
        const wrapper = shallow (<PaginatorComponent  />, {context: {store}})
        const component = wrapper.dive()

        console.log(wrapper);        
    });
})