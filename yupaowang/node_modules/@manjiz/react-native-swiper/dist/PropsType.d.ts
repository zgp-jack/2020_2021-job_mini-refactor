/// <reference types="react" />
import { StyleProp, ViewStyle, ScrollViewProps } from 'react-native';
export interface ReactNativeSwiperProps extends Omit<ScrollViewProps, 'onScrollBeginDrag' | 'onMomentumScrollEnd'> {
    children: any;
    containerStyle?: StyleProp<ViewStyle>;
    scrollViewStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    paginationStyle?: StyleProp<ViewStyle>;
    dotStyle?: StyleProp<ViewStyle>;
    activeDotStyle?: StyleProp<ViewStyle>;
    horizontal?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    index?: number;
    onIndexChanged?: (index: number) => void;
    width?: number;
    height?: number;
    loadMinimal?: boolean;
    loadMinimalSize?: number;
    loadMinimalLoader?: React.ReactElement;
    showsPagination?: boolean;
    renderPagination?: (index: number, total: number, swiper: any) => React.ReactElement;
    dot?: React.ReactElement;
    activeDot?: React.ReactElement;
    dotColor?: string;
    activeDotColor?: string;
    autoplayTimeout?: number;
    autoplayDirection?: boolean;
    onScrollBeginDrag?: (event: ScrollEventSim, state: ReactNativeSwiperState, swiper: any) => void;
    onMomentumScrollEnd?: (e: ScrollEventSim, state: ReactNativeSwiperState, swiper: any) => void;
    onTouchStartCapture?: any;
    onTouchStart?: any;
    onTouchEnd?: any;
    onResponderRelease?: any;
}
export interface ReactNativeSwiperState {
    width: number;
    height: number;
    offset: Offset;
    autoplayEnd?: boolean;
    loopJump?: boolean;
    total: number;
    index: number;
    dir: 'x' | 'y';
    pIndex: number;
}
export declare type Offset = {
    x: number;
    y: number;
};
export declare type ScrollEventSim = {
    nativeEvent: {
        contentOffset: {
            x: number;
            y: number;
        };
    };
};
