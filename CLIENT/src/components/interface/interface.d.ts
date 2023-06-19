export interface Users {
    name: string;
    email: string;
    password?: string;
    _id?: string;
}
// TYPE OF SKELETON
export interface SkeletonProps {
    ref?: Ref<HTMLDivElement>;
    height?: string;
    width?: string;
    backgroundColor?: string;
    highlightColor?: string;
    borderRadius?: string | number;
    circle?: boolean;
    size_circle?: string;
    duration?: number;
    count?: number;
    className?: string;
    direction?: 'ltr' | 'rtl' | string;
    enableAnimation?: boolean;
    style?: React.CSSProperties;
}
//
export interface SkeletonThemeProps {
    repeat?: number;
    margin?: string;
    children: React.ReactNode;
    height?: number | string;
    width?: number | string;
    backgroundColor?: string;
    highlightColor?: string;
    borderRadius?: string | number;
    className?: string;
    style?: React.CSSProperties;
}
