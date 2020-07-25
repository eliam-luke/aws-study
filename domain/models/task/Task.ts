import { Serializable, JsonProperty } from 'typescript-json-serializer';
import * as moment from 'moment'

@Serializable()
export class Task {

  @JsonProperty('id')
  public id: number

  @JsonProperty('title')
  public title: string

  @JsonProperty('description')
  public description: string

  @JsonProperty('created_at')
  public created_at: number

  @JsonProperty('updated_at')
  public updated_at: number

  @JsonProperty('timestamp')
  public timestamp: string

  constructor(id: number = 0, title: string = null, description: string = null) {
    this.id = id
    this.title = title
    this.description = description
    this.created_at = new Date().getTime()
    this.updated_at = new Date().getTime()
    this.timestamp = moment().format()
  }
}