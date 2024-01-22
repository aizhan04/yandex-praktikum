import Handlebars from "handlebars";
import * as Icons from "./components/icons";
import * as Components from "./components";
import { registerComponent } from "./core/registerComponent";
import { PAGES, navigate } from "./core/navigate";

Object.entries(Icons).forEach(([name, icon]) => {
  Handlebars.registerPartial(name, icon);
});

Handlebars.registerPartial("FormAuth", Components.FormAuth);

registerComponent("Button", Components.Button);
registerComponent("Avatar", Components.Avatar);
registerComponent("Chat", Components.Chat);
registerComponent("ChatItem", Components.ChatItem);
registerComponent("ChatList", Components.ChatList);
registerComponent("Input", Components.Input);
registerComponent("Search", Components.Search);
registerComponent("Error", Components.Error);
registerComponent("ErrorText", Components.ErrorText);
registerComponent("InputField", Components.InputField);
registerComponent("Back", Components.Back);

document.addEventListener("DOMContentLoaded", () => navigate(PAGES.LOGIN));
