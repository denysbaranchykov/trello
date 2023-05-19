import React from 'react';
import s from './ColumnComponent.module.css';

interface columnComponentProps {
    title: string
}

const ColumnComponent = ({title}: columnComponentProps) => {
    return (
        <>
            <h1>{title}</h1>
            <div className={s.wrapper}>
                <h2 className={s.header}>To Do</h2>
                <div className={s.buttonForm}
                     onClick={() => console.log('Add card clicked')}
                >
                    <span className={s.buttonText}>+ Add card</span>
                </div>
            </div>
        </>

    );
};

export default ColumnComponent;