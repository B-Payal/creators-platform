import {render} from '@testing-library/react';
import Header from '../layout/Header';
import { describe, it} from '@jest/globals';
import { AuthProvider } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('Header component' , ()=>{
    it('renders without crashing' , ()=>{
        render(<BrowserRouter>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </BrowserRouter>);
    })
});