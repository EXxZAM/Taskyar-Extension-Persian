import styled from "styled-components";
import { useTasks } from "../../../contexts/TaskContext";
interface ItemsProps {
    task: string;
    label: string;
    is_completed: boolean;
    id: string;
    priority: "green" | "red" | "orange" | null;
}

export const Item = ({
    task,
    label,
    is_completed,
    id,
    priority,
}: ItemsProps) => {
    const { updateTask, deleteTask }: any = useTasks();
    const changeCompleted = (id: string) => {
        updateTask({ id });
    };
    const handleDelete = (id: string) => {
        deleteTask({ id });
    };

    const labels = label.split(",");
    console.log();

    return (
        <Container>
            {is_completed ? (
                <ListItem className="completed">
                    <div className="labelInfo">
                        <div>
                            <input
                                type="checkbox"
                                defaultChecked={is_completed}
                                onChange={() => changeCompleted(id)}
                            />
                            {labels[0] !== "" ? (
                                <p>{task}</p>
                            ) : (
                                <p
                                    style={{
                                        backgroundColor: `${priority}`,
                                    }}
                                >
                                    {task}
                                </p>
                            )}
                        </div>
                        <div>
                            {labels[0] !== "" &&
                                labels.map((label_item: string) => {
                                    return (
                                        <span
                                            className="tag tag-color tag-sm"
                                            style={{
                                                backgroundColor: `${priority}`,
                                            }}
                                        >
                                            {label_item}
                                        </span>
                                    );
                                })}
                        </div>
                    </div>

                    <div>
                        <i
                            className="fa fa-trash-o"
                            aria-hidden="true"
                            onClick={() => {
                                handleDelete(id);
                            }}
                        />
                    </div>
                </ListItem>
            ) : (
                <ListItem>
                    <div className="labelInfo">
                        <div>
                            <input
                                type="checkbox"
                                defaultChecked={is_completed}
                                onChange={() => changeCompleted(id)}
                            />
                            {labels[0] !== "" ? (
                                <p>{task}</p>
                            ) : (
                                <p
                                    style={{
                                        color: `${priority}`,
                                    }}
                                >
                                    {task}
                                </p>
                            )}
                        </div>
                        <div>
                            {labels[0] !== "" &&
                                labels.map((label_item: string) => {
                                    return (
                                        <span
                                            className="tag tag-color tag-sm"
                                            style={{
                                                backgroundColor: `${priority}`,
                                            }}
                                        >
                                            {label_item}
                                        </span>
                                    );
                                })}
                        </div>
                    </div>

                    <div>
                        <i
                            className="fa fa-trash-o"
                            aria-hidden="true"
                            onClick={() => {
                                handleDelete(id);
                            }}
                        />
                    </div>
                </ListItem>
            )}
            <hr className="divider" />
        </Container>
    );
};

const Container = styled.div`
    .completed {
        opacity: 0.5;
        margin-top: 5px;
        list-style: none;
    }
`;

const ListItem = styled.li`
    margin-top: 5px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    i {
        display: none;
    }
    input[type="checkbox"] {
        cursor: pointer;
    }
    .labelInfo {
        display: flex;
        flex-direction: column;
    }
    div {
        display: flex;
        flex-direction: row;
    }
    p {
        margin-right: 5px;
        font-weight: 100;
        font-size: 15px;
    }

    .divider {
        height: 1px;
        padding: 0.2em 0.5em 0.3em;
        background-color: rgba(140, 153, 169, 0.9);
        border: none;
    }
    span {
    }
    .tag {
        display: inline-block;
        border-radius: 5px;
        background: #1977f3;
        font-weight: 600;
        padding: 5px;
        margin-left: 5px;
        width: auto;
    }

    h1.tag {
        margin-left: 0;
        margin-right: 0;
    }

    .tag-sm {
        font-size: 0.8em;
        display: inline-block;
        letter-spacing: 0.15ch;
        font-weight: 400;
    }

    .tag-color {
        background: #2775c3;
        color: white;
    }
    &:hover {
        i {
            justify-content: center;
            cursor: pointer;
            display: flex;
        }
    }
`;
