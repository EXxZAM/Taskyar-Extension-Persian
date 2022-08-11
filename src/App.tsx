import styled from "styled-components";
import TodoPanel from "./components/Panel";

function App() {
    return (
        <>
            <MainApp>
                <Container>
                    <TodoPanel />
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
