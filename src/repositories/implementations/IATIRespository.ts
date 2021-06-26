import { ITransactionSummaryRepository } from "../ITransactionSummaryRepository";
import { TransactionSummary } from "../../entities/TransactionSummary";
import * as request from "request-promise-native";

export class IATIRespository implements ITransactionSummaryRepository {
  async getTransactionsSummaries(country:string) {
    //https://iatidatastore.iatistandard.org/api/transactions/aggregations/?aggregations=count,value,expenditure,activity_count,commitment,incoming_fund,transaction_date_year&format=json&recipient_country=SD&group_by=provider_org,transaction_date_year&convert_to=usd
    const baseUrl = 'https://iatidatastore.iatistandard.org/api/transactions/aggregations/';
    const queryString = '?aggregations=count,value,expenditure,activity_count,commitment,incoming_fund,transaction_date_year&format=json&recipient_country=' + country +'&group_by=provider_org,transaction_date_year&convert_to=usd';
    var options = {
        uri: baseUrl + queryString,
    };
    var lista : Array<TransactionSummary> = new Array();
    const result = await request.get(options);
    const jsonResponse = JSON.parse(result);
    var lista : Array<TransactionSummary> = new Array();
    jsonResponse.results.forEach(transaction => {
      const transactionSummary  = new TransactionSummary({
        organization: transaction.provider_org,
        year: transaction.transaction_date_year,
        value: transaction.value,
        activity_count: transaction.activity_count,
        count: transaction.count
      });
      lista.push(transactionSummary);
    });
    return lista;
  }
}
