import React from 'react';

interface myProps {
    title: string
}

const ColumnComponent = ({title}: myProps) => {
    return (

            <div>
                <h1>Column works</h1>
                <div>{title}</div>
            </div>

    );
};

export default ColumnComponent;