/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

// eslint-disable-next-line require-jsdoc
const E13Form = ({inputs, setInputs}) => {

  return <React.Fragment>
    <Box display="flex" css={css`margin-bottom: 3vh;`}>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="p141_assigned"
        value={inputs.p141}
        onChange={(e) => setInputs({...inputs, p141: [e.target.value]})}
      />
    </Box>
    <Box>
      <FormControl fullWidth variant="filled" required css={css`margin-bottom: 3vh; border: none`}>
        <InputLabel>p177_assigned_property_type</InputLabel>
        <Select
          value={inputs.p177}
          onChange={(e) => setInputs({...inputs, p177: [e.target.value]})}
        >
          <MenuItem value={"http://purl.org/dc/terms/title"}>dcterms:title</MenuItem>
          <MenuItem value={"http://purl.org/dc/terms/Location"}>dcterms:location</MenuItem>
          <MenuItem value={"http://purl.org/dc/terms/references"}>dcterms:references</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth variant="filled" required css={css`margin-bottom: 3vh; border: none`}>
        <InputLabel>p141_type</InputLabel>
        <Select
          value={inputs.p141_type}
          onChange={(e) => setInputs({...inputs, p141_type: [e.target.value]})}
        >
          <MenuItem value={"literal"}>literal</MenuItem>
          <MenuItem value={"uri"}>uri</MenuItem>
        </Select>
      </FormControl>
    </Box>
  </React.Fragment>
}

export default E13Form;