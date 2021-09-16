import { Button, TextField, Grid } from "@material-ui/core";
import { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

export const ChatForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const changeValue = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  const useStyles = makeStyles((theme) => ({
    form: {
      padding: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            autoFocus
            color="primary"
            margin="dense"
            value={inputValue}
            onChange={changeValue}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="primary"
            variant="outlined"
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
