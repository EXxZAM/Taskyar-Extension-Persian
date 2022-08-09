import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTasks } from "../../contexts/TaskContext";
import { Item } from "./taskManager/Item";
import { ToDoList } from "./taskManager/ToDoList";
function RightPanel() {
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
        <Panel>
            <Container className={`bgDark`}>
                <div className="top">
                    <div className="header">
                        <h2>دست نویس</h2>
                    </div>

                    <hr className="divider" />
                    <ul className="ListHolder" ref={parent}>
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
                    </ul>
                </div>
                <div className="bottom">
                    <ToDoList />{" "}
                    <span>
                        Made By
                        <i className="fa fa-brands fa-github"></i>
                        <a href="https://github.com/exxzam"> Mahdi Olamaei</a>
                    </span>
                </div>{" "}
            </Container>
        </Panel>
    );
}

const Panel = styled.div``;
const Container = styled.div`
    width: auto;
    height: 520px;
    padding: 20px 20px 0 20px;
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
            color: white !important;
        }
    }
    .onTop {
        z-index: 2;
    }
    .ListHolder {
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
        height: 1px;
        background-color: rgba(140, 153, 169, 0.7);
        border: none;
    }
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default RightPanel;
