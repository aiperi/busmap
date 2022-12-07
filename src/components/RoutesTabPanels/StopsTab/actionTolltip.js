import React from 'react';
import {ColorButton} from "./style";

export const ActionMarkerToolltip = () => {

    return (
        <div>
           <ColorButton onClick={() => alert('hi')}>Заменить</ColorButton>
            <ColorButton>Добавить</ColorButton>
            <ColorButton>Изьять</ColorButton>
        </div>
    );
};

