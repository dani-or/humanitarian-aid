import { Request, Response } from "express";

import { GetTransactionSummaryService } from "./getTransactionSummaryByCountry.service";

export class GetTransactionSummaryController {

  constructor(private getCredit: GetTransactionSummaryService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let p = await this.getCredit.execute({country:request.query.country});
      return response.status(201).json(p);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}