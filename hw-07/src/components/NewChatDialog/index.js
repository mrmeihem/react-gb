import { useCallback, useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@material-ui/core";

export const NewChatDialog = ({ handleAddChat }) => {
  const [checkValue, setCheckValue] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const changeValue = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const onAddChat = (event) => {
    event.preventDefault();
    handleAddChat(inputValue);
    setInputValue("");
    handleClose();
  };

  useEffect(() => {
    if (inputValue === "") {
      setCheckValue(true);
    } else {
      setCheckValue(false);
    }
  }, [inputValue]);

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        fullWidth
        onClick={handleClickOpen}
      >
        Add new chat
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={onAddChat}>
          <DialogTitle>Create a new chat</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="New chat name"
              type="text"
              fullWidth
              variant="standard"
              value={inputValue}
              onChange={changeValue}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button disabled={checkValue} type="submit">
              Add chat
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
