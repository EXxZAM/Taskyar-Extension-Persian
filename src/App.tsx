import styled from "styled-components";
import RightPanel from "./components/RightPanel/Panel";

function App() {
    return (
        <>
            <MainApp>
                <Container>
                    <RightPanel />
                </Container>
            </MainApp>
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 1.3rem;
`;

const MainApp = styled.div`
    font-family: "Peyda";

    border-radius: 1.3rem;
    input {
        font-family: "Peyda";
    }

    button {
        font-family: "Peyda" !important;
        font-size: 12px !important;
    }
`;

export default App;
