import { addons, types } from "storybook/manager-api";
import {
  ADDON_ID,
  ADDON_TITLE,
  PARAM_BADGES_KEY,
  TOOL_ID,
  TOOL_ID_EXTRA,
} from "./constants";
import { sidebar } from "./locations/sidebar";
import { Toolbar } from "./locations/toolbar";
import { ToolbarExtra } from "./locations/toolbar-extra";

// Register the addon
addons.register(ADDON_ID, () => {

  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    paramKey: PARAM_BADGES_KEY,
    title: ADDON_TITLE,
    match: () => true,
    render: Toolbar,
  });

  // Register the tool extra location
  addons.add(TOOL_ID_EXTRA, {
    type: types.TOOLEXTRA,
    paramKey: PARAM_BADGES_KEY,
    title: ADDON_TITLE,
    match: () => true,
    render: ToolbarExtra,
  });

});

addons.setConfig({
  sidebar,
});
