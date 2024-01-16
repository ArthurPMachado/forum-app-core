import { randomUUID } from "node:crypto"
import { IQuestionProps } from "./interfaces/IQuestionProps"

export class Question {
  public id?: string
  public title: string
  public content: string
  public authorId: string

  constructor(props: IQuestionProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
}
