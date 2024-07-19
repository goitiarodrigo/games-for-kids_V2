import { Container } from '@mui/material';
import { JSX } from '@emotion/react/jsx-runtime';

const BodyLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <Container
            className="bg-body-bg border-solid border-4 border-border-body-bg h-[70vh] overflow-y-scroll flex justify-center items-center"
            fixed>
            {children}
        </Container>
    );
};

export default BodyLayout;
