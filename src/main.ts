import Handlebars from "handlebars";
import * as Components from "./components";
import { registerComponent } from "./core/registerComponent";
import { navigate } from "./core/navigate";

// Object.entries(Components).forEach(([ name, component ]) => {
//   if(['Input', 'Button'].includes(name)) {
//     registerComponent(name, component);
//     return;
//   }
//   Handlebars.registerPartial(name, component);

// });

Handlebars.registerPartial("FormAuth", Components.FormAuth);

registerComponent("Button", Components.Button);
registerComponent("Avatar", Components.Avatar);
registerComponent("Chat", Components.Chat);
registerComponent("ChatItem", Components.ChatItem);
registerComponent("ChatList", Components.ChatList);
registerComponent("Input", Components.Input);
registerComponent("ProfileInput", Components.ProfileInput);
registerComponent("Search", Components.Search);
// registerComponent("Avatar", Components.Avatar);
// registerComponent("Chat", Components.Chat);
// registerComponent("ChatItem", Components.ChatItem);
// registerComponent("ChatList", Components.ChatList);
// registerComponent("Error", Components.Error);
// registerComponent("Form-Auth", Components.FormAuth);
// registerComponent("ProfileInput");

document.addEventListener("DOMContentLoaded", () => navigate("login"));
