import { Container } from '@mui/material';
import { JSX } from '@emotion/react/jsx-runtime';

interface IProps {
    children: JSX.Element | JSX.Element[];
    title: string;
}

const BodyLayout = ({ children, title }: IProps) => {
    return (
        <Container maxWidth={false}>
            <span className="text-white">{title}</span>
            <div className="overflow-x-scroll overflow-y-hidden flex gap-3 py-2">{children}</div>
        </Container>
    );
};

export default BodyLayout;
