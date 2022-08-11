import { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { useTasks } from "../../contexts/TaskContext";
const TaskForm = () => {
    const { addTask }: any = useTasks();
    const greenIcon = useRef<any>();
    const orangeIcon = useRef<any>();
    const redIcon = useRef<any>();
    const [priorityState, setPriorityState] = useState<
        "green" | "red" | "orange" | null
    >(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const task = document.querySelector<HTMLInputElement>("#task");
        const label = document.querySelector<HTMLInputElement>("#label");

        addTask({
            task: task?.value,
            label: label?.value,
            priority: priorityState,
        });
        if (task != null && label != null) {
            task.value = "";
            label.value = "";
            task.focus();
            redIcon.current.style.opacity = 0.3;
            greenIcon.current.style.opacity = 0.3;
            orangeIcon.current.style.opacity = 0.3;
        }
    };

    const changePriority = (type: "green" | "red" | "orange") => {
        if (type === "green") {
            if (priorityState !== "green") {
                greenIcon.current.style.opacity = 1;
                redIcon.current.style.opacity = 0.3;
                orangeIcon.current.style.opacity = 0.3;
                setPriorityState("green");
            } else {
                greenIcon.current.style.opacity = 0.3;
                setPriorityState(null);
            }
        } else if (type === "red") {
            if (priorityState !== "red") {
                greenIcon.current.style.opacity = 0.3;
                redIcon.current.style.opacity = 1;
                orangeIcon.current.style.opacity = 0.3;
                setPriorityState("red");
            } else {
                redIcon.current.style.opacity = 0.3;
                setPriorityState("red");
            }
        } else if (type === "orange") {
            if (priorityState !== "orange") {
                greenIcon.current.style.opacity = 0.3;
                redIcon.current.style.opacity = 0.3;
                orangeIcon.current.style.opacity = 1;
                setPriorityState("orange");
            } else {
                orangeIcon.current.style.opacity = 0.3;
                setPriorityState("orange");
            }
        }
    };

    return (
        <Container>
            <StyledForm onSubmit={(e) => handleSubmit(e)}>
                <div className="rightPart">
                    <input
                        type="text"
                        id="task"
                        className="TaskInput"
                        placeholder="عنوان کار جدید"
                        required
                        onInvalid={(e: any) =>
                            e.target.setCustomValidity("الزامی!")
                        }
                        onInput={(e: any) => e.target.setCustomValidity("")}
                    />
                    <hr />

                    <input
                        type="text"
                        id="label"
                        className="TaskLabel"
                        placeholder="برچسب کار (با کاما جدا کنید)"
                    />
                    <div className="priority">
                        <i
                            className="fa fa-solid fa-circle"
                            style={{
                                color: "green",
                                fontSize: "10px",
                                opacity: "0.3",
                            }}
                            ref={greenIcon}
                            onClick={() => changePriority("green")}
                        ></i>
                        <i
                            className="fa fa-solid fa-circle"
                            style={{
                                color: "orange",
                                fontSize: "10px",
                                marginRight: "5px",
                                opacity: "0.3",
                            }}
                            ref={orangeIcon}
                            onClick={() => changePriority("orange")}
                        ></i>
                        <i
                            className="fa fa-solid fa-circle"
                            style={{
                                color: "red",
                                fontSize: "10px",
                                marginRight: "5px",
                                opacity: "0.3",
                            }}
                            ref={redIcon}
                            onClick={() => changePriority("red")}
                        ></i>
                    </div>
                </div>
                <AddButton type="submit">+</AddButton>
            </StyledForm>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;

    .rightPart {
        border-radius: 5px;
        background-color: #d1d5db;
        padding: 4px;
        width: 170px;
        height: 61px;
        display: flex;
        flex-direction: column;
    }
    .priority {
        display: flex;
        flex-direction: row;
        text-align: left;
        align-items: left;
        justify-content: left;
    }
    .TaskInput {
        font-size: 20px;
        background-color: #d1d5db;
        width: auto;
        height: 30px;
        outline: none;
        border: none;
        font-size: 15px;
    }
    .TaskInput::placeholder {
        opacity: 0.7;
        font-size: 20px;
    }

    .TaskLabel {
        background-color: #d1d5db;
        /* width: 80px; */
        outline: none;
        border: none;
        font-size: 15px;
    }
    .TaskLabel::placeholder {
        opacity: 0.7;
        font-size: 13px;
    }

    p {
        opacity: 0.5;
    }
`;

const AddButton = styled.button`
    width: 40px;
    margin-right: 5px;
    height: 70px;
    padding: 4px;
    background-color: #1977f3;
    border: none;
    outline: none;
    font-size: 30px;
    font-weight: 100;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;
export default TaskForm;
