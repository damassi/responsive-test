import { themeProps } from "@artsy/palette";
import React from "react";
import { ResponsiveProviderProps as _ResponsiveProviderProps } from "./Responsive";
declare type MediaQuery = keyof typeof themeProps["mediaQueries"];
export declare const Responsive: React.ComponentType<React.ConsumerProps<import("Utils/Responsive/Responsive").MediaQueryMatches<"xs" | "sm" | "md" | "hover" | "xl" | "lg">>>;
export declare type Breakpoint = keyof typeof themeProps["grid"]["breakpoints"];
export interface DeprecatedResponsiveProviderProps {
    initialBreakpoint?: Breakpoint;
    breakpoints: {
        [K in Breakpoint]: string;
    };
    children: React.ReactNode;
}
export declare type NewResponsiveProviderProps = _ResponsiveProviderProps<MediaQuery>;
export declare type MatchingMediaQueries = NewResponsiveProviderProps["initialMatchingMediaQueries"];
export declare type ResponsiveProviderProps = NewResponsiveProviderProps | DeprecatedResponsiveProviderProps;
export declare const ResponsiveProvider: React.SFC<ResponsiveProviderProps>;
export {};
