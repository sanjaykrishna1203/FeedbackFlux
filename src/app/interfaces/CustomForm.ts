import { Question } from "./question";

export interface CustomForm {
    Id?:string;
    Title:string;
    CreatedAt?:string;
    Fields:Question[];
}
