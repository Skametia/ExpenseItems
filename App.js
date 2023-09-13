import ExpenseItem from "./ExpenseItem";

function App() {
  let expenseDate = new Date(2021, 3, 23);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;
 
  
  return (
    <div>
      <h2>Let's get Started</h2>
      <ExpenseItem
        date={expenseDate}
        title={expenseTitle}
        amount={expenseAmount}
      />
    </div>
  );
}

export default App;
