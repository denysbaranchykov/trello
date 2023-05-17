import React from 'react';
import s from './ColumnComponent.module.css';

interface myProps {
    title: string
}

const ColumnComponent = ({title}: myProps) => {
    return (
        <>
            <h1>{title}</h1>
            <div className={s.wrapper}>
                <h2 className={s.header}>To Do</h2>
                <div className={s.buttonForm}
                     onClick={() => console.log('Add card clicked')}
                >
                    <button className={s.buttonPlus}>+</button>
                    <span className={s.buttonText}>Add card</span>

                </div>
            </div>
        </>

    );
};

export default ColumnComponent;