export default class UserAvatar {

  private _name: string;
  private _url: string;

  constructor(obj?: any) {
    obj = obj || {};
    this._name = obj.name || '';
    this._url = obj.url || '';
  }

  get name(): string {
    return this._name;
  }

  get url(): string {
    return this._url;
  }
}
