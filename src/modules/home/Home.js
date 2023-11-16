import Overviewcomponent from "./Overview"
import Transactioncomponent from "./Transaction"
import { useEffect, useState } from "react"

const Homecomponent = (props) =>{
    const[Transaction,updateTransaction]=useState([]);
    const[expense,updateexpense]=useState(0);
    const[income,updateincome]=useState(0);
    const addTransaction=(payload)=>{
        const Transactionarray=[...Transaction];
        Transactionarray.push(payload);
        updateTransaction(Transactionarray);
    };
    const calculate=()=>{
        let exp=0;
        let inc=0;
        Transaction.map((payload)=>{
            payload.type==="expense"?(exp=exp+payload.amount):(inc=inc+payload.amount);
        });
        updateexpense(exp);
        updateincome(inc);
    }
    useEffect(()=>calculate(),[Transaction]);
    return(
        <div className="text-white text-xl pt-2 md:pt-5 font-bold">
            <Overviewcomponent addtransaction={addTransaction} expense={expense} income={income}/>
            <Transactioncomponent Transaction={Transaction}/>
        </div>
    )
}

export default Homecomponent