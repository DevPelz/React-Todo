import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, markDone, setUpdateData, deleteTask, updateData }) => {
  return (
    <>
      {todo &&
        todo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>

                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    {task.id !== updateData.id && (
                      <span
                        title="Completed / Not Completed"
                        onClick={(e) => markDone(task.id)}
                      >
                        <span>
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                      </span>
                    )}

                    {task.status ? null : (
                      <>
                        <span
                          title="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <span>
                            <FontAwesomeIcon icon={faPen} />
                          </span>
                        </span>
                      </>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <span>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default Todo;
