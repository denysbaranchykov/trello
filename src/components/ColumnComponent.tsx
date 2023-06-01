import React, {useState} from 'react';
import s from './ColumnComponent.module.css';
import {isDisabled} from "@testing-library/user-event/dist/utils";

interface columnComponentProps {
    title: string
}

const ColumnComponent = ({title}: columnComponentProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const changeValue = (e: any) => {
        setInputValue(e.target.value);
    };
    const clickAddCard = () => {
        setIsClicked(prev => !prev);
    };
    const cancelClick = () => {
        setIsClicked(false)
    };
    const addClick = () => {
       console.log('add');
    };

    return (
        <>
            <h1>{title}</h1>
            <p>{inputValue}</p>
            <div className={s.wrapper}>
                <h2 className={s.header}>To Do</h2>
                {
                    isClicked &&
                    <div>
                        <input className={s.inputField}
                               autoFocus={true}
                               type="text"
                               value={inputValue}
                               onChange={changeValue}
                        />
                        <button className={s.cancel}
                              onClick={cancelClick}>Cancel</button>
                        <button className={s.add}
                              disabled={!inputValue || inputValue.replace(/\s/g, '').length === 0}
                              onClick={addClick}>Add</button>
                    </div>

                }
                <div className={s.buttonForm}
                     onClick={clickAddCard}
                >
                    {
                        !isClicked &&
                        <div className={s.addCard}>
                            <span className={s.buttonPlus}>+</span>
                            <span className={s.buttonText}>Add card</span>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default ColumnComponent;