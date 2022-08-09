import TaskForm from "./TaskForm";
import styled from "styled-components";

export const ToDoList = () => {
    return (
        <>
            <Container>
                <ul>
                    <TaskForm />
                </ul>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
`;
