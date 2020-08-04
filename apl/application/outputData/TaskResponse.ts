import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class TaskResponse {

  @JsonProperty('status')
  public Status: number

  @JsonProperty('detail')
  public Detail: string

  constructor(Status: number = null, Detail: string = null) {
    this.Status = Status
    this.Detail = Detail
  }
}