import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class TaskRequest {

  @JsonProperty('title')
  public Title: string

  @JsonProperty('description')
  public Description: string

  constructor(Title: string = null, Description: string = null) {
    this.Title = Title
    this.Description = Description
  }
}