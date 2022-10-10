declare module 'LinearGradient' {
    import { Component } from 'react';
    export interface LinearGradientProps {
        colors: string[];
    }
    export default class LinearGradient extends Component<LinearGradientProps, any> {
        static defaultProps: {
            colors: string[];
        };
        render(): JSX.Element;
    }
}
