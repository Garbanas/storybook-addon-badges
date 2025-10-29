import { useStorybookApi } from "storybook/manager-api";
import React from "react";

import { PARAM_BADGES_KEY, PARAM_CONFIG_KEY } from "../../constants";
import { Badges } from "../../components";
import { BadgesConfig } from "../../typings.interface";
import { defaultBadgesConfig } from "../../config";

export const ToolbarExtra = () => {
  const api = useStorybookApi();
  const storyBadges = api.getCurrentParameter<string[]>(PARAM_BADGES_KEY) || [];
  const customBadgesConfig =
    api.getCurrentParameter<BadgesConfig>(PARAM_CONFIG_KEY) || {};

  const config = {
    ...defaultBadgesConfig,
    ...customBadgesConfig,
  };

  const badges = storyBadges
    .map((badge) => config[badge])
    .filter((badge) => badge.location?.includes("toolbar-extra"));

  return badges.length ? <Badges badges={badges} /> : null;
};
