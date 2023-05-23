import React, {useState} from 'react';
import s from './ColumnComponent.module.css';

interface columnComponentProps {
    title: string
}

const ColumnComponent = ({title}: columnComponentProps) => {
    const [clicked, setClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const clickAddCard = () => {
        setClicked(prev => !prev)
    }
    const changeValue = (e: any) => {
        setInputValue(e.target.value)
    }

    console.log('value', inputValue);

    return (
        <>
            <h1>{title}</h1>
            <div className={s.wrapper}>
                <h2 className={s.header}>To Do</h2>
                <div className={s.buttonForm}
                     onClick={clickAddCard}
                >
                    <span className={s.buttonPlus}>+</span>
                    <span className={s.buttonText}>Add card</span>
                </div>
                {
                    clicked && <input
                        type="text"
                        value={inputValue}
                        onChange={changeValue}
                    />
                }
            </div>
            {console.log('clicked', clicked)}
        </>
    );
};

export default ColumnComponent;