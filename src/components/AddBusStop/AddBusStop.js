import React, {useState} from 'react';
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { blue, green, pink, yellow } from '../../colors';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import TramIcon from '@mui/icons-material/Tram';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { styled } from '@mui/material/styles';
import { addStopRequest } from '../../store/actions/stopsActions';
import { useDispatch } from 'react-redux';

const style = {
  fontSize: '22px',
};

const ColorButton = styled(Button)(() => ({
  color: 'white',
  textTransform: 'capitalize',
  margin: '5px',
  backgroundColor: '#295b8d',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#19538c',
  },
}));

const AddBusStop = ({ onCancel, radius, changeRadius, position }) => {
  const dispatch = useDispatch();

  const [type, setType] = useState({
    bus: false,
    trolleybus: false,
    tram: false,
    taxi: false,
  });
  const [stop, setStop] = useState({
    n: '',
    tp: 1,
    d: '',
    sh: 0,
    r: 50,
    p: {
      x: position.lat,
      y: position.lng,
      r: radius,
    },
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setType((prevState) => ({
      ...prevState,
      [name]: e.target.checked,
    }));
    console.log(type);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setStop((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitNewStop = () => {
    // setStop(prev => ({
    //     ...prev,
    // }));

    dispatch(addStopRequest({ ...stop }));
    console.log('stop in submit', stop);
  };

  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent={'space-between'}
        sx={{
          padding: '25px 15px',
          backgroundColor: 'white',
          border: '1px solid grey',
        }}
      >
        <TextField
          name="n"
          variant={'outlined'}
          placeholder={'????????????????'}
          value={stop.n}
          onChange={onChangeHandler}
          sx={{
            width: '33%',
            border: '1px solid lightgrey',
            fontSize: '12px',
            '& .MuiOutlinedInput-root': {
              '& > fieldset': {
                border: 'none',
              },
            },
          }}
          inputProps={{ style: { height: '2px' } }}
        />
        <TextField
          name="d"
          variant={'outlined'}
          placeholder={'????????????????'}
          value={stop.d}
          onChange={onChangeHandler}
          sx={{
            width: '37%',
            border: '1px solid lightgrey',
            fontSize: '12px',
            '& .MuiOutlinedInput-root': {
              '& > fieldset': {
                border: 'none',
              },
            },
          }}
          inputProps={{ style: { height: '2px' } }}
        />

        <Grid
          container
          item
          width={'25%'}
          justifyContent={'space-evenly'}
          alignItems={'center'}
        >
          <label style={{ color: 'grey', caretColor: 'transparent' }}>
            ??????
          </label>
          <Tooltip title="????????????????" arrow>
            <Checkbox
              name="bus"
              checked={stop.bus}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              icon={
                <DirectionsBusFilledIcon sx={{ ...style, color: 'darkgrey' }} />
              }
              checkedIcon={
                <DirectionsBusFilledIcon sx={{ ...style, color: green }} />
              }
              sx={{
                backgroundColor: 'whitesmoke',
                '&:hover': { backgroundColor: 'lightgrey' },
              }}
            />
          </Tooltip>

          <Tooltip title="????????????????????" arrow>
            <Checkbox
              name="trolleybus"
              checked={stop.trolleybus}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              icon={
                <DirectionsTransitIcon sx={{ ...style, color: 'darkgrey' }} />
              }
              checkedIcon={
                <DirectionsTransitIcon sx={{ ...style, color: blue }} />
              }
              sx={{
                backgroundColor: 'whitesmoke',
                '&:hover': { backgroundColor: 'lightgrey' },
              }}
            />
          </Tooltip>

          <Tooltip title="??????????????" arrow>
            <Checkbox
              name="tram"
              checked={stop.tram}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              icon={<TramIcon sx={{ ...style, color: 'darkgrey' }} />}
              checkedIcon={<TramIcon sx={{ ...style, color: pink }} />}
              sx={{
                backgroundColor: 'whitesmoke',
                '&:hover': { backgroundColor: 'lightgrey' },
              }}
            />
          </Tooltip>

          <Tooltip title="???????????????????? ??????????" arrow>
            <Checkbox
              name="taxi"
              checked={stop.taxi}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              icon={<LocalTaxiIcon sx={{ ...style, color: 'darkgrey' }} />}
              checkedIcon={<LocalTaxiIcon sx={{ ...style, color: yellow }} />}
              sx={{
                backgroundColor: 'whitesmoke',
                '&:hover': { backgroundColor: 'lightgrey' },
              }}
            />
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent={'space-between'}
        sx={{ backgroundColor: '#15416c', padding: ' 10px 15px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <Typography variant={'subtitle1'}>????????????</Typography>
          <TextField
            type={'number'}
            value={radius}
            onChange={changeRadius}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              border: '1px solid white',
              margin: '0 10px',
              width: '80px',
              fontSize: '12px',
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
          />
          <Typography variant={'subtitle1'}>??</Typography>
        </div>
        <div>
          <ColorButton variant={'contained'} onClick={onCancel}>
            ????????????????
          </ColorButton>
          <ColorButton variant={'contained'} onClick={submitNewStop}>
            ??????????????????
          </ColorButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default AddBusStop;