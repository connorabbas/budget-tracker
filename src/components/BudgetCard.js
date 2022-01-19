import { currencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max, bgGray}) {
    const classNames = [];
    if (amount > max) {
        classNames.push('bg-danger', 'bg-opacity-10');
    } else if (bgGray) {
        classNames.push('bg-light');
    }
    var ratio = (amount / max) * 100;
    return (
        <div className={"card " + classNames.join(' ')}>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div className="me-2">{ name }</div>
                    <div className="d-flex align-items-baseline">{ currencyFormatter.format(amount) }  / <span className="text-muted fs-6 ms-1">{ currencyFormatter.format(max) }</span></div>
                </h5>
                <div className="progress rounded-pill">
                    <div className={"progress-bar rounded-pill bg-" + getProgressBarVariant(amount, max)} role="progressbar" style={{width:ratio+'%'}} aria-valuenow={amount} aria-valuemin="0" aria-valuemax={max}></div>
                </div>
                <div className="mt-3">
                    <button className="btn btn-outline-primary me-2 ms-auto">Add Expense</button>
                    <button className="btn btn-outline-secondary">View Expenses</button>
                </div>
            </div>
        </div>
    );
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max;
    if (ratio < .5) return 'primary';
    if (ratio < .75) return 'warning';
    return 'danger';
    
}
