import React, { useEffect } from "react";
import {
  Typography,
  Paper,
  Button,
  CircularProgress,
  Modal,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import {
  selectChack,
  selectChackLoading,
  selectChackError,
} from "../../store/norris/selectors";
import { getChack } from "../../store/norris/actions";

export const ChackNorris = () => {
  const dispatch = useDispatch();

  const hereChack = useSelector(selectChack);
  const error = useSelector(selectChackError);
  const loading = useSelector(selectChackLoading);

  console.log(hereChack);

  const reload = () => {
    dispatch(getChack());
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <>
      <Typography align="center" variant="h2" color="secondary">
        Chack Norris Page
      </Typography>
      <Paper>
        {loading && (
          <Modal open>
            <Typography align="center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <CircularProgress />
            </Typography>
          </Modal>
        )}
        {error ? (
          <Typography color="textSecondary" variant="h5" align="center">
            Error: {error}
          </Typography>
        ) : (
          <>
            <Typography align="center" color="primary">
              <img src={hereChack.icon_url} />
            </Typography>
            <Paper elevation={0}>
              <br />
              <Typography color="textSecondary" variant="h5" align="center">
                {hereChack.value}
              </Typography>
              <br />
            </Paper>
            <Typography align="center">
              Created at: {hereChack.created_at}
            </Typography>
            <br />
          </>
        )}
        <Button fullWidth color="secondary" onClick={reload}>
          Reload
        </Button>
      </Paper>
    </>
  );
};
