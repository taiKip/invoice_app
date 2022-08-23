import { IInvoice } from "../types";


const Invoice = ({ vendor, amount, id, date }:IInvoice) => {
  return (
    <li className="grid grid-cols-5">
      <span>{vendor}</span>
      <span>{amount}</span>
      <span>{id}</span>
      <span>{date}</span>
      <span>
        <button>Ok</button>
        <button>Error</button>
        <button>50%</button>
        <button></button>
      </span>
    </li>
  );
}

export default Invoice