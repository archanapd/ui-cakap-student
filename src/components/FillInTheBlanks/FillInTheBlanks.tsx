import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Container, Grid} from "@mui/material";

import "./FillInTheBlanks.css";

const formatLabel = (props: any, text: any) => {
  let queryString: any;
  if (props.options.mode === 'text') {
    queryString = text.replace(/\*/g, '<input class="text-replacer" type="text"/>');
  }
  else {
    queryString = text.replace(/\*/g, addSelect(props.options));
  }
  return queryString;
};

const addSelect = (options: any) => {
  return (
    '<select>' + 
    options.options.books.map((item:any, indx: any) => {
        return '<option value={item.title}>'+ item.title + '</option>'
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
          <div dangerouslySetInnerHTML={ {__html: formatLabel(props, props.options.sentence)} } />
          </Grid>
      </Container>
    </React.Fragment>
  );
}
