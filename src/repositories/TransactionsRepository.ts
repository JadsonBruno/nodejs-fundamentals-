/**
 * IMPORTS
 */
import Transaction from '../models/Transaction';


/**
 * TYPES
 */
import {Balance} from './index.d';
import {CreateTransactionDTO} from './index.d';


/**
 * CODE
 */
class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const {income, outcome} = this.transactions.reduce(
      (accumulator: Balance, transaction: Transaction): Balance => {
        switch (transaction.type)
        {
          case "income":
            accumulator.income += transaction.value;
            break;
          case "outcome":
            accumulator.outcome += transaction.value;
            break;
          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0
      }
    );

    const total = income - outcome;

    return {
      income,
      outcome,
      total
    };
  }

  public create({title, value, type}: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({title, value, type});

    this.transactions.push(transaction);

    return transaction;
  }
}


/**
 * EXPORTS
 */
export default TransactionsRepository;
