import type { API_HashEntry, API_SidebarOptions } from "storybook/internal/types";
import React from "react";
import { Sidebar } from "./sidebar";

export const sidebar: API_SidebarOptions = {
  renderLabel: (item: API_HashEntry) => {
    if (item.type !== "story" && item.type !== "docs") {
      return;
    }

    return <Sidebar item={item} />;
  },
};
