import { Paper, Typography, Checkbox } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { toggleProfileCheckbox } from "../../store/profile/actions";

export const ProfilePage = () => {
  const state = useSelector((state) => state.toggleProfileCheckbox);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleProfileCheckbox);
  };

  return (
    <>
      <Typography align="center" variant="h2" color="secondary">
        Profile
      </Typography>
      <Paper>
        <Typography align="center" color="primary">
          <Checkbox
            checked={state}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          Check me!
        </Typography>
      </Paper>
    </>
  );
};
