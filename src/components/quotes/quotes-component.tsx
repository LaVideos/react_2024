import React, {useEffect, useState} from 'react';
import {IQuote} from "../../types/IQuote";
import {services} from "../../services/services";
import QuoteComponent from "./quote-component";

const QuotesComponent = () => {

    const [quotes, setQuotes] = useState<IQuote[]>();

    useEffect(() => {
        services.getAllQuotes().then(({data})=>setQuotes([...data.quotes]))
    }, [quotes]);

    return (
        <div>
            {
                quotes?.length&&quotes.map(quote=><QuoteComponent key={quote.id} quote={quote}/>)
            }
        </div>
    );
};

export default QuotesComponent;
