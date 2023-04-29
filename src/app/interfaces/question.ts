export interface Question {
    id?: string;
    orderNo: number;
    type: string;
    required: boolean;
    question: {
      text: string;
      placeholder?: string;
      offeredAnswers: {text:string}[];
    };
    response:string;
    Sentiment?:string;
    Score?:string;
}
