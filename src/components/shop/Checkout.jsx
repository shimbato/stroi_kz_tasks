import React, { useCallback } from "react";
import { citiesNames } from "../../constants";
import { useForm } from "react-hook-form";
import {
  Button,
  styled,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Modal,
} from "@mui/material";
import { Box, Typography } from "@mui/material";

//utils
import { getInputState } from "../../utils/getInputState";
import { required, validateNumber } from "../../utils/validators";

import { useDispatch } from "react-redux";


import {
  changeBasketItemCount,
  deleteBasket,
  removeItemBasket
} from "../../store/slice/shop";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #1976D2 ',
  boxShadow: 24,
  p: 4,
};
const Wrapper = styled("form")`
  width: 400px;
  height: auto;
 
`;






export const Checkout = (saveOrder) => {

  const { register, handleSubmit, formState } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("user")) || {}
  });

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cities, setCities] = React.useState('');

  const handleChange = (event) => {
    setCities(event.target.value);
  };
  const onSubmit = useCallback(
    (values) => {
      alert('Submit');
      saveOrder(values)
      dispatch()
    },
    [saveOrder, dispatch]
  );
  return (
    <div>
      <Button onClick={handleOpen} sx={{ width: "80%", mb: 2, ml: 5 }} variant="outlined">CHECKOUT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          color="primary"
        >
          <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <h3 style={{ fontFamily: "Roboto", color: " #1976D2" }}>SHIPPING ADDRESS</h3>

            <FormControl sx={{ width: "100%", mb: 1 }}>
              <TextField
                style={{ borderColor: ' #1976D2 ' }}
                variant="outlined"
                label="Name"

                {...register("Name", { required: required("Прошу введи имя") })}
                {...getInputState(formState, "Name")}
              />
            </FormControl>
            <FormControl sx={{ width: "100%", mb: 1 }}>
              <TextField
                //  required
                // id="outlined-number"
                // label="Number"
                style={{ borderColor: ' #1976D2 ' }}
                label="Phone"
                variant="outlined"
                type=""
                {...register("number", {
                  required: required(),
                  validate: validateNumber
                })}
                {...getInputState(formState, "number")}
              />
            </FormControl>
            <FormControl sx={{ width: "100%", mb: 1 }}>
              <TextField
                style={{ borderColor: ' #1976D2 ' }}
                id="outlined-number"
                label="Email"
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cities</InputLabel>
              <Select
                style={{ borderColor: ' #1976D2 ' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cities}
                label="Cities"
                onChange={handleChange}
              >
                {citiesNames.map((city) =>
                  <MenuItem value={city}>{city}</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%", pt: 2 }}>
              <Button type="submit" variant="outlined" onClick={() => dispatch(deleteBasket())}>
                SEND
              </Button>
            </FormControl>
          </Wrapper>
        </Box>

      </Modal>
    </div>
  )


}
{/* <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
<Select
  labelId="demo-multiple-chip-label"
  id="demo-multiple-chip"
  multiple
  value={personName}
  onChange={handleChange}
  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
  renderValue={(selected) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {selected.map((value) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  )}
  MenuProps={MenuProps}
>
  {names.map((name) => (
    <MenuItem
      key={name}
      value={name}
     
    >
      {name}
    </MenuItem>
  ))}
</Select> */}