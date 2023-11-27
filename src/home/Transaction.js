import { useEffect, useState } from "react";
const TransactionCell = (props) => {
  const isExpense = props.payload?.type === "expense";

  return (
    <div className="flex items-center justify-center my-5">
      <div
        className={`w-72 md:w-96 h-10 bg-gray-300 py-1 text-black rounded-md overflow-hidden border-r-8 border-solid ${
          isExpense ? "border-red-600" : "border-green-600"
        }`}
      >
        <span className="pr-3 font-bold">{props.payload.desc}:</span>
        <span>${props.payload.amount}</span>
      </div>
    </div>
  );
};

const Transactioncomponent = (props) => {
  const[filter,update] = useState(props.Transaction)
  const[search,updatesearch] = useState("")
  const filterData = () =>{
    if(!search || !search.trim().length){
      update(props.Transaction);
      return;
    }
    let txn = [...props.Transaction];
    txn = txn.filter((payload)=>payload.desc.toLowerCase().includes(search.toLowerCase().trim()));
    update(txn)
  }
  useEffect(()=>filterData(search),[props.Transaction])
  return (
    <div className="mt-10">
      <h2 className="text-white text-xl pt-5 font-bold pb-5">Transactions:-</h2>
      <input
        type="text"
        placeholder="Search..."
        className="bg-black text-white w-60 h-12 rounded-xl px-5"
        value={search}
        onChange={(e)=>{updatesearch(e.target.value); filterData(e.target.value)}}
      />
      {filter?.length
        ? filter.map((payload) => (
            <TransactionCell key={payload.id} payload={payload} />
          ))
        : ""}
    </div>
  );
};

export default Transactioncomponent;
