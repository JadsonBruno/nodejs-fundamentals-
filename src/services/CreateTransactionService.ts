/**
 * IMPORTS
 */
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

/**
 * TYPES
 */
import {Request} from './index.d';


/**
 * CODE
 */
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title, type, value}: Request): Transaction {
    const {total} = this.transactionsRepository.getBalance();

    // outcome transaction and total is less than the desired amount: throw error
    if (type === 'outcome' && value > total)
    {
      throw Error('Insufficient balance to complete the transaction');
    }

    // create transaction
    const transaction = this.transactionsRepository
                            .create({title, value, type});

    // return created transaction                            
    return transaction;
  }
}


/**
 * EXPORTS
 */
export default CreateTransactionService;
