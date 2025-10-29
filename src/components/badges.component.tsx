import React, { FC } from "react";
import { Separator } from "storybook/internal/components";
import { styled } from "storybook/theming";
import { Badge } from "./badge.component";
import { BadgeConfig } from "../typings.interface";

const BadgesWrapper = styled.div(({ theme }) => ({
  gap: theme.layoutMargin,
  paddingInline: theme.layoutMargin / 2,
  display: "flex",
  alignItems: "center",
}));

interface BadgesProps {
  badges: Array<BadgeConfig>;
}

export const Badges: FC<BadgesProps> = ({ badges }) => {
  if(!badges.length) {
    return null;
  }

  return (
    <>
      <Separator />
      <BadgesWrapper>
        {badges.map((badge) => (
          <Badge key={badge.title} config={badge} />
        ))}
      </BadgesWrapper>
      <Separator />
    </>
  )
}
