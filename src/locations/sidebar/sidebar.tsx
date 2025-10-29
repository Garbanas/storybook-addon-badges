import { useStorybookApi } from "storybook/manager-api";
import React, { FC } from "react";
import {
  API_ComponentEntry,
  API_DocsEntry,
  API_GroupEntry,
  API_RootEntry,
  API_StoryEntry,
  API_TestEntry,
} from "storybook/internal/types";
import { PARAM_BADGES_KEY, PARAM_CONFIG_KEY } from "../../constants";
import { defaultBadgesConfig } from "../../config";
import { BadgesConfig } from "../../typings.interface";
import { Badges } from "../../components";

interface SidebarProps {
  item: API_RootEntry | API_GroupEntry | API_ComponentEntry | API_DocsEntry | API_StoryEntry | API_TestEntry;
}

export const Sidebar: FC<SidebarProps> = ({ item }) => {
  const api = useStorybookApi();
  const params = api?.getParameters(item.id);

  if (!params || !params[PARAM_BADGES_KEY] || !params[PARAM_CONFIG_KEY]) {
    return item.name;
  }

  const storyBadges: Array<string> = params[PARAM_BADGES_KEY];
  const customBadgesConfig: BadgesConfig = params[PARAM_CONFIG_KEY];

  const config = {
    ...defaultBadgesConfig,
    ...customBadgesConfig,
  };

  const badges = storyBadges
    .map((badge) => config[badge])
    .filter((badge) => badge.location?.includes("sidebar"));

  return (
    <>
      {item.name}
      <Badges badges={badges} />
    </>
  );
};
