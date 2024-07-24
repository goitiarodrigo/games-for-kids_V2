import { JSX } from 'react';

interface IProps {
    children: JSX.Element | JSX.Element[];
}

const TabComponent = ({ children }: IProps) => {
    return <div>{children}</div>;
};

export default TabComponent;
