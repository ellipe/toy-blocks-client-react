import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import colors from "../constants/colors";

const Block = ({ idx,  text}) => {
  const classes = useStyles();
  return (
   <Box className={classes.block}>
     <Typography 
      className={classes.indice}>
        {idx || "Unknown"}
      </Typography>
      <Typography className={classes.text}>
        {text}
      </Typography>
   </Box>
  );
};

const useStyles = makeStyles(() => ({
  block: {
    background: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 2,
    padding: 8,
    marginBottom: 8,
  },
  text: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: '20px',
    letterSpacing: '0.25px',
    '&::first-letter' : {
      textTransform: 'uppercase'
    }
  },
  indice: {
    color: colors.indices, // move this to constant.
    fontSize: 10,
    lineHeight: '16px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    textTransform: 'uppercase'
  },
}));

Block.propTypes = {
  idx: PropTypes.number,
  text: PropTypes.string
};

export default Block;
