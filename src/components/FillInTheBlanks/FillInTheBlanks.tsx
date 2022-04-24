import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Container, Grid} from "@mui/material";

import "./FillInTheBlanks.css";

const formatLabel = (props: any, text: any) => {
  let queryString: any;
  if (props.options.mode === 'text') {
    queryString = text.replace(/\*/g, '<input class="text-replacer" type="text"/>');
  } else {
    // queryString = text.replace(/\*/g, addSelect(props.options));
    const mapObj = props.options.options;
    queryString = text.replace(/\b(?:books|colors|numbers)\b/gi, (matched: any) => addSelect(matched, props));
  }
  return queryString;
};

const addSelect = (matched: any, props: any) => {
  let options = props.options.options[matched];
  return (
    '<select>' +
    options.map((item: any, indx: any) => {
      return '<option value={item.title}>' + item.title + '</option>'
    }) +
    '</select>'
  );
}

export default function FillInTheBlanks(props: any) {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="lg">
        <Grid>
          <div dangerouslySetInnerHTML={{__html: formatLabel(props, props.options.sentence)}}/>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
