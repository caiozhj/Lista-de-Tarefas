import React from "react";
import { Task } from "../interfaces/Task";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import ModalEdit from "./ModalEdit"


type Props = {
  taskList: Task[];
  handleDelete: (id: number) => void;
};



const TaskList = ({ taskList, handleDelete }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {taskList.length > 0 ? (
        // <p> tem tarefas cadastradas</p>
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
              <Stack direction="row" spacing={1} sx={{ ml: 42.5 }}>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={handleOpen}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Stack>
              <Divider />
            </div>
          </div>
        ))
      ) : (
        <p> nao tem tarefas</p>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalEdit/>
      </Modal>
    </>
  );
};

export default TaskList;
