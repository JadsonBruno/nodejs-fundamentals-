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
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


/**
 * EXPORTS
 */
export default transactionRouter;
