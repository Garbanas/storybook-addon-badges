import React from 'react';
import {WithTooltip, TooltipMessage} from 'storybook/internal/components';

import type {FC, ReactNode} from 'react';
import type {TooltipConfig} from "../typings.interface";

export interface BadgeTooltipWrapperProps {
    children: ReactNode;
    tooltip: TooltipConfig;
}

export const BadgeTooltipWrapper: FC<BadgeTooltipWrapperProps> = ({tooltip, children}) => {

    const tooltipMessageProps = (typeof tooltip === 'string')
        ? {desc: tooltip}
        : tooltip;

    const tooltipMessage = <TooltipMessage {...tooltipMessageProps} />;

    return (
        <WithTooltip tooltip={tooltipMessage}>
            {children}
        </WithTooltip>
    )
};
