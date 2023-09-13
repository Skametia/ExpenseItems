import React, { Component } from 'react';

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: ["Rent"]
    };
  }

  render() {
    const { expenses } = this.state;

    return (
      <div>
        <h1>Expense List</h1>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense}</li>
          ))}
        </ul>
        {expenses.length === 1 && (
          <p>Only single Expense here. Please add more...</p>
        )}
      </div>
    );
  }
}

export default ExpenseList;
