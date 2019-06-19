export default class UserAvatar {
  name: string;
  url: string;

  constructor(obj: any | {}) {
    this.name = obj.name || '';
    this.url = obj.url || '';
  }
}
