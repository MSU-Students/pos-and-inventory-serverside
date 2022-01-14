import { ExpensesDto } from './expenses.dto';

describe('ExpensesDto', () => {
  it('should be defined', () => {
    expect(new ExpensesDto()).toBeDefined();
  });
});
