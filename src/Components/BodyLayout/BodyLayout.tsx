import { Container } from '@mui/material';
import { JSX } from '@emotion/react/jsx-runtime';

interface IProps {
    children: JSX.Element | JSX.Element[];
    title: string;
}

const BodyLayout = ({ children, title }: IProps) => {
    return (
        <Container maxWidth={false}>
            <span>{title}</span>
            <div className="overflow-x-scroll overflow-y-hidden flex">{children}</div>
        </Container>
    );
};

export default BodyLayout;
