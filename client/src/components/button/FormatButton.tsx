import * as React from 'react';
import { separateWithComma } from '../../actions/format';

interface IProps {
    name: string;
    className: string;
    inputValue?: string;
    onClick?: (data: string) => void;
}

export const FormatButton = (props: IProps) => {
    const {name, className, inputValue, onClick} = props;
    return (
        <div className={className}>
            <button className="btn" onClick={() => {
                if(inputValue) {
                onClick && onClick(separateWithComma(inputValue));
                }
            } }> {name} </button>
        </div>      
    )
}