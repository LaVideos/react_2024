import React, {FC} from 'react';
import {IQuote} from "../../types/IQuote";

interface QuoteTypes{
    quote:IQuote;
}

const QuoteComponent:FC<QuoteTypes> = ({quote}) => {
    return (
        <div>
            <div>{quote.quote}</div>
            <div>{quote.author}</div>
        </div>
    );
};

export default QuoteComponent;
