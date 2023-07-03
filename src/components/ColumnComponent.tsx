import React, {useEffect, useRef, useState} from 'react';
import s from './ColumnComponent.module.css';

interface columnComponentProps {
    title: string
}

interface myCardsType {
    title: string,
    id: string
}

const ColumnComponent = ({title}: columnComponentProps) => {
    const [isClicked, setIsClicked] = useState(false);
    // const [inputValue, setInputValue] = useState('');
    const [cards, setCards] = useState<myCardsType[]>([
        {title: 'card1', id: '1'},
        {title: 'card2', id: '2'},
    ]);
    const clickAddCard = () => {
        setIsClicked(prev => !prev);
    };
    const cancelClick = () => {
        setIsClicked(false)
    };
    const inputRef = useRef<HTMLInputElement>(null);
    const addClick = () => {
        if(inputRef.current?.value) {
            setCards((prev) => [
                    ...prev,
                    {
                        title: inputRef.current?.value as string,
                        id: generateId()
                    }
                ]
            );
        }
    };
    console.log('cards', cards);





    let uniqueId = new Set();
    console.log('uniqueId', uniqueId);

    const generateId = (): string => {
        let id = '';
        let digits = '0123456789';
        for (let i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * digits.length);
        }

        //  2 way
        // let alphabetAndDigits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // for (let i = 0; i < 10; i++) {
        //     id += alphabetAndDigits.charAt(Math.floor(Math.random() * alphabetAndDigits.length));
        // }


        // 3 way
        // let result = Math.random().toString(36).substring(2,13);
        // return result;


        //check if already exist but have problems here with empty new Set
        if (uniqueId.has(id)) {
            return generateId()
        }

        uniqueId.add(id);
        return id;
    }
    console.log('current value', inputRef.current?.value.replace(/\s/g, '').length === 1);

    return (
        <>
            <h1>{title}</h1>
            <p>{inputRef.current?.value}</p>
            <div className={s.wrapper}>
                <h2 className={s.header}>To Do</h2>
                {
                    isClicked &&
                    <div>
                        <input className={s.inputField}
                               autoFocus={true}
                               ref={inputRef}
                               type="text"
                        />
                        <button className={s.cancel}
                                onClick={cancelClick}>Cancel
                        </button>
                        <button className={s.add}
                                disabled={inputRef.current?.value.replace(/\s/g, '').length === 0}
                                onClick={addClick}>Add
                        </button>
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