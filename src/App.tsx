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
`;

const MainApp = styled.div`
    font-family: "Peyda";
    input {
        font-family: "Peyda";
    }
    button {
        font-family: "Peyda" !important;
        font-size: 12px !important;
    }
`;

export default App;
