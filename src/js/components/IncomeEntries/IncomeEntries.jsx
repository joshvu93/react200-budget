import React from 'react';

export default class ExpenseEntries extends React.Component {
constructor(props) {
	super(props);
}

render() {
	return (
		<div className='cardborder-success mb-3'>
			<div className='card-header text-white bg-success'> Expense Entries</div>
			<div className='card-body'>
				<form>
					<div className='form-group'>
						<label htmlFor='expense-description'>Description</label>
						<input
							type='text'
							className='form-control'
							id='expense-description'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='expense-amount'>Amount</label>
						<div className='input-group'>
							<span className='input-group'>$</span>
							<input
								type='text'
								className='form-control'
								id='expense-amount'
							/>
							<button
								type='button'
								className='btn btn-success col-12 mb-5'
							>+ Add Expense
						</button>
							<table className='table table-sm table-hover'>
								<thread>
									<tr>
										<th>Description</th>
										<th style={{ width: 120 }}>Amount</th>
									</tr>
								</thread>
								<tbody>
									<tr>
										<td>Rent</td>
										<td>$1,500.00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
}