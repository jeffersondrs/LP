import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoMenuSharp, IoExitOutline } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '100vw',
  backgroundColor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: '90vh',
  display: "flex",
  flexDirection: "column", 
  justifyContent: "space-evenly",
  alignItems: "end",
  color: "white",
  transition: "all 0.5s ease-in-out",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-row items-center justify-between">
      <Button onClick={handleOpen}>
        Menu <IoMenuSharp />{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-20 h-20  cursor-pointer text-center flex flex-col justify-center items-center" onClick={handleClose}>
            <IoExitOutline className="hover:text-red-600 ease-in-out transition-colors text-2xl text-white" />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
