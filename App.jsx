import './App.css';
// import Expenseitem from './component/Expenses/expenseitem/ExpenseItem';
// import Expenselist from './component/Expenses/Expenselist/Expenselist';
import Expenses from './component/Expenses/Expenses';
function App() {
  // const [count, setCount] = useState(0)


  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Groceries',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
    {
      id: 'e3',
      title: 'Car Repair',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New work desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      {/* <Expenseitem 
        title = {DUMMY_DATA[0].title}
        amount = {DUMMY_DATA[0].amount}
        date = {DUMMY_DATA[0].date}
      />

      <Expenseitem 
        title = {DUMMY_DATA[1].title}
        amount = {DUMMY_DATA[1].amount}
        date = {DUMMY_DATA[1].date}
      />
      
      <Expenseitem 
        title = {DUMMY_DATA[2].title}
        amount = {DUMMY_DATA[2].amount}
        date = {DUMMY_DATA[2].date}
      />

      <Expenseitem 
        title = {DUMMY_DATA[3].title}
        amount = {DUMMY_DATA[3].amount}
        date = {DUMMY_DATA[3].date}
      /> */}
<Expenses
   expenses = {DUMMY_DATA}
/>

    </div>
  )
}

export default App;
