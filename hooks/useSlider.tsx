import {SliderContext} from '../context/SliderContext';
import {useContext} from 'react';
import FC from 'react';

export const useSlider = () => {
    const context = useContext(SliderContext);
    if (context === undefined) {
        throw new Error('useSlider must be used within a SliderProvider');
    }
    return context;
};
