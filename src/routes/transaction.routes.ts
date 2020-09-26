/**
 * IMPORTS
 */
import {Router} from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';


/**
 * CONSTANTS AND DEFINITIONS
 */
const transactionRouter = Router();
const transactionsRepository = new TransactionsRepository();


/**
 * ROUTES
 */
transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all();

    const balance = transactionsRepository.getBalance();

    return response.status(200).json({transactions, balance});
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const {title, value, type} = request.body;

    const createTransaction = new CreateTransactionService(transactionsRepository);

    const transaction = createTransaction.execute({title, value, type});

    return response.status(200).json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


/**
 * EXPORTS
 */
export default transactionRouter;
