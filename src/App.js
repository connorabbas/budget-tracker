import './App.css';
import BudgetCard from './components/BudgetCard';

function App() {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <h1 className='mb-4'>Budgets</h1>
                    <button className="btn btn-primary me-2">Add Budget</button>
                    <button className="btn btn-outline-primary">Add Expense</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <BudgetCard name="Entertainment" amount={600} max={1200} bgGray>

                    </BudgetCard>
                </div>
            </div>
        </div> 
    );
}

export default App;
