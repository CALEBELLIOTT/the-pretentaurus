import { thesaurusService } from "../Services/ThesaurusService"



export class ThesaurusController {
  constructor() {

  }

  async changeDescription(string) {
    try {
      thesaurusService.changeDescription(string)
    } catch (error) {
      console.error(error)
    }
  }
}