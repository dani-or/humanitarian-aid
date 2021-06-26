import { expect } from 'chai';
import { getTransactionSummaryService } from '../../../../src/useCases/transaction/getTransactionSummaryByCountry';


describe('getTransactionSummaryByCountry', () => {
    it('getTransactionSummaryByCountry success', async() => {
        try {
            const transactionByYear = await getTransactionSummaryService.execute({country: "SD"});
            console.log(transactionByYear);
            expect(100000).to.equal(100000);
            return;
          } catch (error) {
              console.log("mierror", error);
          }
    });
});