import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTasks } from "../../contexts/TaskContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Item } from "./taskManager/Item";
import { ToDoList } from "./taskManager/ToDoList";
function RightPanel() {
    const { updateTheme, theme }: any = useTheme();
    const { tasks }: any = useTasks();
    const parent = useRef(null);
    tasks &&
        tasks.sort(
            (a: { is_completed: any }, b: { is_completed: any }) =>
                Number(a.is_completed) - Number(b.is_completed)
        );

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);
    return (
        <Container className={`bg${theme}`}>
            <div className="top">
                <div className="header">
                    <h2>تسکیار</h2>
                    <label className="switch setting " id="switch">
                        {theme === "Light" ? (
                            <input
                                type="checkbox"
                                onChange={() => updateTheme()}
                            />
                        ) : (
                            <input
                                type="checkbox"
                                checked={true}
                                onChange={() => updateTheme()}
                            />
                        )}

                        <span className="slider  round "></span>
                    </label>
                </div>

                <hr className="divider" />
                <ul className="ListHolder" ref={parent}>
                    <div className="items">
                        {tasks &&
                            tasks.map((task: any) => {
                                return (
                                    <Item
                                        key={task.id}
                                        task={task.task}
                                        label={task.label}
                                        is_completed={task.is_completed}
                                        id={task.id}
                                        priority={task.priority}
                                    />
                                );
                            })}
                    </div>
                </ul>
            </div>
            <div className="bottom">
                <ToDoList />
                <span>
                    Made By
                    <i className="fa fa-brands fa-github"></i>
                    <a href="https://github.com/exxzam"> Mahdi Olamaei</a>
                </span>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 520px;
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .ListHolder {
        height: 360px;
        overflow-y: auto;
        direction: ltr;
        ::-webkit-scrollbar {
            width: 10px;
            border-radius: 1.3rem;
        }

        ::-webkit-scrollbar-track {
            border-radius: 1.3rem;
        }

        ::-webkit-scrollbar-thumb {
            background: #1977f3;
            border-radius: 1.3rem;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #1977f3;
            border-radius: 1.3rem;
        }
    }
    .items {
        direction: rtl;
    }

    span {
        margin-top: 5px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;

        i {
            margin-left: 10px;
        }
        a {
            margin-left: 2px;
            text-decoration: none;
        }
    }

    .header {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        align-content: space-around;
        justify-content: space-between;

        h2 {
            font-size: 30px;
        }
        button {
            font-size: 15px;
            border: none;
            color: white;
            width: 75px;
            height: 25px;
            border-radius: 4px;
            background-color: #1977f3;
            cursor: pointer;
        }
    }

    .divider {
        margin-top: 10px;
        margin-bottom: 5px;
        height: 1px;
        background-color: rgba(140, 153, 169, 0.7);
        border: none;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #121212;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 1.7px;
        background-color: #ffffff;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #1977f3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

export default RightPanel;
