/// <reference types="ramda" />
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import querystring from 'query-string';
export interface LinkedInToken {
    authentication_code?: string;
    access_token?: string;
    expires_in?: number;
}
export interface ErrorType {
    type?: string;
    message?: string;
}
interface State {
    raceCondition: boolean;
    modalVisible: boolean;
    authState: string;
    logout: boolean;
}
interface Props {
    clientID: string;
    clientSecret?: string;
    redirectUri: string;
    authState?: string;
    permissions: string[];
    linkText?: string;
    injectedJavaScriptOnLoad?: string;
    containerStyle?: any;
    wrapperStyle?: any;
    closeStyle?: any;
    animationType?: 'none' | 'fade' | 'slide';
    areaTouchText: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    shouldGetAccessToken?: boolean;
    isDisabled?: boolean;
    preventCloseOnAuthorize?: boolean;
    renderButton?(): ReactNode;
    renderClose?(): ReactNode;
    onOpen?(): void;
    onClose?(): void;
    onSignIn?(): void;
    onMessage?(e: any): void;
    onSuccess(result: LinkedInToken): void;
    onError(error: ErrorType): void;
}
export declare const cleanUrlString: (state: string) => string;
export declare const getCodeAndStateFromUrl: (x: string) => import("ramda").Evolve<querystring.ParsedQuery<string>, {
    state: (state: string) => string;
}>;
export declare const getErrorFromUrl: (x: string) => import("ramda").Evolve<querystring.ParsedQuery<string>, {
    error_description: (state: string) => string;
}>;
export declare const transformError: (...args: any[]) => ErrorType;
export declare const isErrorUrl: (x: string) => boolean;
export declare const injectedJavaScript = "\n  setTimeout(function() {\n    document.querySelector(\"input[type=text]\").setAttribute(\"autocapitalize\", \"off\");\n  }, 1);\n  true;\n";
export declare const getAuthorizationUrl: ({ authState, clientID, permissions, redirectUri, }: Partial<Props>) => string;
export declare const getPayloadForToken: ({ clientID, clientSecret, code, redirectUri, }: Partial<Props> & {
    code: string;
}) => string;
export declare const fetchToken: (payload: any) => Promise<any>;
export declare const logError: (error: ErrorType) => void;
export declare const onLoadStart: (url: string, authState: string, onSuccess: (result: LinkedInToken) => void, onError: (error: ErrorType) => void, close: any, getAccessToken: (token: string) => Promise<LinkedInToken>, shouldGetAccessToken?: boolean | undefined) => Promise<void>;
export default class LinkedInModal extends React.Component<Props, State> {
    static propTypes: {
        clientID: PropTypes.Validator<string>;
        clientSecret: PropTypes.Requireable<string>;
        redirectUri: PropTypes.Validator<string>;
        permissions: PropTypes.Requireable<any[]>;
        authState: PropTypes.Requireable<string>;
        onSuccess: PropTypes.Validator<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onSignIn: PropTypes.Requireable<(...args: any[]) => any>;
        onMessage: PropTypes.Requireable<(...args: any[]) => any>;
        linkText: PropTypes.Requireable<string>;
        areaTouchText: PropTypes.Requireable<object>;
        renderButton: PropTypes.Requireable<(...args: any[]) => any>;
        renderClose: PropTypes.Requireable<(...args: any[]) => any>;
        containerStyle: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        wrapperStyle: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        closeStyle: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        animationType: PropTypes.Requireable<string>;
        shouldGetAccessToken: PropTypes.Requireable<boolean>;
        preventCloseOnAuthorize: PropTypes.Requireable<boolean>;
        injectedJavaScriptOnLoad: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        onError: (error: ErrorType) => void;
        permissions: string[];
        linkText: string;
        areaTouchText: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        animationType: string;
        containerStyle: {};
        wrapperStyle: {};
        closeStyle: {};
        shouldGetAccessToken: boolean;
    };
    state: State;
    webView: any;
    componentDidUpdate(nextProps: Props, nextState: State): void;
    onNavigationStateChange: ({ url }: any) => Promise<void>;
    getAuthorizationUrl: () => string;
    getAccessToken: (code: string) => Promise<any>;
    close: () => void;
    open: () => void;
    logoutAsync: () => Promise<{}>;
    renderButton: () => JSX.Element;
    renderClose: () => {} | null | undefined;
    onLoadStart: () => void;
    onMessage: (event: any) => void;
    renderWebview: () => JSX.Element | null;
    render(): JSX.Element;
}
export {};
