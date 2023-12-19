export interface HeaderProps {
    hideBackButton?: boolean;
    title: string;
    description: string;
    showButtons?: boolean;
    actions?: JSX.Element;
    style?: React.CSSProperties;
}