import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Container, Grid} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import "./ImageSelection.css";
import StandardImageList from 'components/ImageList/ImageListGroup';


export default function ImageSelection(props: any) {

  function imageClicked(item: any, index: number) {
    if (props.options.mode === 'single') {
      props.options.images.forEach((image: any) => {
        image.selected = false
      });
    }
    props.options.images[index].selected = !props.options.images[index].selected;
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="lg">
        <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
          {props.options.images.map((item: any, index: number) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className={`base-class ${item.selected ? 'selected' : ''}`}
                onClick={() => {
                  imageClicked(item, index)
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </React.Fragment>
  );
}
