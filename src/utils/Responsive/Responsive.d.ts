/**
 * TODO: This is the actual implementation which is generic and ready to be
 *       extracted.
 */
import React from "react";
export declare type MediaQueries<M extends string = string> = {
    [K in M]: string;
};
export interface MediaQueryMatchers {
    [key: string]: MediaQueryList;
}
export declare type MediaQueryMatches<M extends string = string> = {
    [K in M]: boolean;
};
export interface ResponsiveProviderProps<M extends string> {
    mediaQueries: MediaQueries<M>;
    initialMatchingMediaQueries?: M[];
    children: React.ReactNode;
}
export interface ResponsiveProviderState {
    mediaQueryMatchers?: MediaQueryMatchers;
    mediaQueryMatches: MediaQueryMatches;
}
export declare function createResponsiveComponents<M extends string>(): {
    Consumer: React.ComponentType<React.ConsumerProps<MediaQueryMatches<M>>>;
    Provider: {
        new (props: ResponsiveProviderProps<M>): {
            isSupportedEnvironment: () => boolean;
            /**
             * Create an array of media matchers that can validate each media query
             */
            setupMatchers: (mediaQueries: MediaQueries<string>) => MediaQueryMatchers;
            /**
             * Uses the matchers to build a map of the states of each media query
             */
            checkMatchers: (mediaQueryMatchers: MediaQueryMatchers) => MediaQueryMatches<string>;
            /**
             * The function that will be called any time a media query status changes
             */
            mediaQueryStatusChangedCallback: () => void;
            componentDidMount(): void;
            componentWillUnmount(): void;
            shouldComponentUpdate(nextProps: Readonly<ResponsiveProviderProps<M>>, nextState: Readonly<ResponsiveProviderState>): boolean;
            render(): JSX.Element;
            setState<K extends "mediaQueryMatchers" | "mediaQueryMatches">(state: ResponsiveProviderState | ((prevState: Readonly<ResponsiveProviderState>, props: Readonly<ResponsiveProviderProps<M>>) => ResponsiveProviderState | Pick<ResponsiveProviderState, K>) | Pick<ResponsiveProviderState, K>, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<ResponsiveProviderProps<M>>;
            state: Readonly<ResponsiveProviderState>;
            context: any;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<ResponsiveProviderProps<M>>, prevState: Readonly<ResponsiveProviderState>): any;
            componentDidUpdate?(prevProps: Readonly<ResponsiveProviderProps<M>>, prevState: Readonly<ResponsiveProviderState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<ResponsiveProviderProps<M>>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ResponsiveProviderProps<M>>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<ResponsiveProviderProps<M>>, nextState: Readonly<ResponsiveProviderState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<ResponsiveProviderProps<M>>, nextState: Readonly<ResponsiveProviderState>, nextContext: any): void;
        };
    };
};
