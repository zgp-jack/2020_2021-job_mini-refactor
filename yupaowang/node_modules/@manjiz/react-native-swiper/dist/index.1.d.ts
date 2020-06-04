/**
 * react-native-swiper
 *
 * react-native >= 0.55.4
 * react >= 16.3.1
 *
 * Modified based on `leecade/react-native-swiper`
 *
 * @author Manjiz<https://github.com/Manjiz>
 */
import React, { Component } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { ReactNativeSwiperProps, ReactNativeSwiperState, Offset } from './PropsType';
export default class extends Component<ReactNativeSwiperProps, ReactNativeSwiperState> {
    /**
     * @see http://facebook.github.io/react-native/docs/scrollview.html
     */
    static defaultProps: {
        horizontal: boolean;
        pagingEnabled: boolean;
        removeClippedSubviews: boolean;
        showsPagination: boolean;
        loop: boolean;
        loadMinimalSize: number;
        autoplayTimeout: number;
        autoplayDirection: boolean;
        index: number;
        showsHorizontalScrollIndicator: boolean;
        showsVerticalScrollIndicator: boolean;
        bounces: boolean;
        scrollsToTop: boolean;
        automaticallyAdjustContentInsets: boolean;
    };
    static getDerivedStateFromProps(props: ReactNativeSwiperProps, state: ReactNativeSwiperState): any;
    state: ReactNativeSwiperState;
    autoplayTimer: any;
    loopJumpTimer: any;
    autoScrolling: boolean;
    scrolling: boolean;
    scrollAnimated: boolean;
    realtimeOffset: Partial<Offset>;
    onAndroidScrollEndTimer: any;
    $scrollView: any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ReactNativeSwiperProps, prevState: ReactNativeSwiperState): void;
    componentWillUnmount(): void;
    /**
     * Reset index and autoplay if contentSizeChange.
     */
    onContentSizeChange: (contentWidth: number, contentHeight: number) => void;
    fullState(): any;
    onLayout: (event: LayoutChangeEvent) => void;
    /**
     * Scroll by index
     */
    scrollBy: (step: number, animated?: boolean) => void;
    /**
     * Automatic rolling
     */
    autoplay: () => void;
    /**
     * Scroll begin handle
     */
    onScrollBegin: (event: any) => void;
    /**
     * workaround-3: Android didn't trigger onMomentumScrollEnd after scrollTo().
     */
    onScroll: (e: any) => void;
    /**
     * Scroll end handle
     */
    onScrollEnd: (e: any) => void;
    onScrollEndDrag: (e: any) => void;
    /**
     * Update index after scroll
     */
    updateIndexByOffset: (contentOffset: any, cb: any) => void;
    scrollViewPropOverrides: () => any;
    /**
     * Render pagination
     * By default, dots only show when `total` >= 2
     */
    renderPagination: () => React.ReactNode;
    renderScrollView: (pages: any) => JSX.Element;
    /**
     * Default render
     */
    render(): JSX.Element;
}
