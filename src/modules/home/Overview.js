import React, {useState} from "react";
const Overviewcomponent = (props) =>{
    const [isadd, toggleadd] = useState(false);
    const Addtranview = (props) =>{
        const[amount, setAmount] = useState();
        const[desc, setDesc] = useState();
        const[type, setType] = useState("income");
        const addtrans = () => {
            props.addtransaction({ amount: Number(amount), desc, type, id: Date.now() });
            props.toggleadd();
          };          
        return(
            <div className="grid items-center justify-center">
                <div className="border border-white max-w-2xl px-16 md:px-40 py-5 rounded-xl">
                    <input type="number" placeholder="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-48 md:w-56 h-10 md:h-14 px-2 py-1 bg-black text-white rounded-xl mb-2 md:mb-4"/><br></br>
                    <input type="text" placeholder="description" value={desc} onChange={(e)=>setDesc(e.target.value)} className=" w-48 md:w-56 h-10 md:h-14 px-2 py-1 bg-black text-white rounded-xl"/>
                    <div className="flex py-3 items-center justify-center">
                        <div className=" pr-2 md:pr-8 text-gray-200 text-lg font-bold"><input type="radio" onChange={(event) => setType(event.target.value)} checked={type==="income"} className="mr-2" id="income" name="type" value="income"></input>INCOME</div>
                        <div className=" text-gray-200 text-lg font-bold"><input type="radio" className="mr-2" onChange={(event) => setType(event.target.value)} checked={type==="expense"} id="expense" value="expense" name="type"></input>EXPENSE</div>
                    </div>
                    <button className="bg-black text-white text-lg md:px-6 md:py-2 px-2 py-2 rounded-md" onClick={addtrans}>ADD TRANSACTION</button>
                </div>
            </div>
        )
    }
    return(
        <div className="text-white text-xl md:pt-5 pt-3 font-bold">
            <div className="flex relative items-center justify-center pb-8">
                <h3 className="text-white font-extrabold text-xl pr-3 md:pr-5">Balance: ${props.income - props.expense}</h3>
                <button className="bg-black text-white text-lg px-6 py-1 rounded-lg" onClick={()=> toggleadd(!isadd)}>{isadd ? "CANCEL" : "ADD"}</button>
            </div>
                <div className="block">
                    {isadd && <Addtranview toggleadd={toggleadd} addtransaction={props.addtransaction}/>}
                </div>
                <div className="block md:flex items-center justify-center mt-8 md:mt-16">
                    <div className=" w-screen mb-3 md:mb-0 md:w-2/12 rounded-xl text-white bg-gray-600 mr-3 md:mr-10 block px-6 py-4 text-left border border-white">EXPENSE: <br></br><span className=" text-orange-500">${props.expense}</span></div>
                    <div className=" w-screen md:w-2/12 text-white rounded-xl bg-gray-600 block px-6 py-4 text-left border border-white">INCOME: <br></br><span className="text-green-500">${props.income}</span></div>
                </div>
        </div>
    )
}

export default Overviewcomponent