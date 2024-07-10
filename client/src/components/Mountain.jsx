import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogContent, DialogTitle, IconButton, Grid, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const mountains = [
  {
    title: 'Sajek',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/bd/d1/fc/sajek.jpg?w=800&h=-1&s=1',
    description: "Sajek Valley  is a popular tourist destination in Bangladesh, situated among the hills of the Kasalong range of mountains in the northern area of the Chittagong Hill Tracts .  Referred to as the Queen of Hills and the Roof of Rangamati, the valley is known for its greenery and dense forests, situated at an elevation of 1,800 feet (550 meters) above sea level."
  },
  {
    title: 'Himchori',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/6a/ed/d2/beautiful-himchhori.jpg?w=1200&h=-1&s=1',
    description: "K2, also known as Mount Godwin-Austen, is the second-higheHimchori is a town located on the edge of hills, about 12 kilometers east of the popular beach resort town of Cox's Bazar in Bangladesh . It's known for its beautiful natural scenery and is a popular tourist destination for both adventure enthusiasts and nature enthusiasts."
  },
  {
    title: 'Nilgiri Mountains',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/35/35/3a/clouds-over-hills.jpg?w=1200&h=-1&s=1',
    description: "The Nilgiri Mountains are an important biodiversity hotspot. The shola forests of the Nilgiris are home to a variety of plant and animal life, including some endangered species."
  }
];

const Mountain = () => {
  const [open, setOpen] = useState(false);
  const [selectedMountain, setSelectedMountain] = useState(null);

  const handleClickOpen = (mountain) => {
    setSelectedMountain(mountain);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMountain(null);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {mountains.map((mountain, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(mountain)}>
                <CardMedia
                  component="img"
                  alt={mountain.title}
                  height="200"
                  image={mountain.image}
                  title={mountain.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {mountain.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="mountain-dialog-title">
        <DialogTitle id="mountain-dialog-title">
          {selectedMountain?.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: 'absolute', right: 8, top: 8, color: 'gray' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {selectedMountain?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Mountain;
