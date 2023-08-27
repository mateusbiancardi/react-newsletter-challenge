import { Store } from "pullstate";

export const confirmation = new Store({
  emailConfirmation: false,
  email: ''
});