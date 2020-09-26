/**
 * EXPORTS
 */
export interface Balance {
    income: number;
    outcome: number;
    total: number;
}

export interface CreateTransactionDTO {
    title: string;
    value: number;
    type: 'income' | 'outcome';
}
