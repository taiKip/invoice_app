import { useState } from "react";
import Invoice from "./components/Invoice";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const data = [
    { id: "100", vendor: "Hankok", Amount: "$18,000", Date: "08/21/2019" },
    { id: "100", vendor: "Hankok", Amount: "$18,000", Date: "08/21/2019" },
    { id: "100", vendor: "Hankok", Amount: "$18,000", Date: "08/21/2019" },
    { id: "100", vendor: "Hankok", Amount: "$18,000", Date: "08/21/2019" },
  ];
  return (
    <div className="text-xl text-center">
      {isLoading && <div> Loading...</div>}
      {data && (
        <div className="ml-auto">
          <div>
            <div>
              <h4>Pending Invoices - The Test company</h4>
            </div>
          </div>
          <div>
            <ul>
              <li className="grid grid-cols-5">
                <span>Vendor</span>
                <span>Amount</span>
                <span>Invoice</span>
                <span>Date</span>
                <span>Actions</span>
              </li>
              {data.map((item) => (
                <Invoice
                  vendor={item.vendor}
                  amount={item.Amount}
                  id={item.id}
                  date={item.Date}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
