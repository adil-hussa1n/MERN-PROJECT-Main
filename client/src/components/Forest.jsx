import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogContent, DialogTitle, IconButton, Grid, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const forests = [
  {
    title: 'Ratargul Swamp Forest',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/07/ee/08/caption.jpg?w=1200&h=-1&s=1',
    description: "The Ratargul Swamp Forest is a unique and beautiful freshwater swamp forest located in the Sylhet Division of Bangladesh. It's situated by the Gowain River and linked with the channel Chengir Khal ."
  },
  {
    title: 'Lebur Char',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1a/a6/a2/img-1061-largejpg.jpg?w=1200&h=-1&s=1',
    description: "Lebur Char, also known locally as Nembur Char or Lembur Char, is a beautiful island located about five kilometers east of Kuakata beach in the Patuakhali district of Bangladesh . It's an all-natural island encompassing roughly 1000 acres and is a popular tourist destination for those seeking a natural escape."
  },
  {
    title: 'Gangamati Reserved Forest',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/07/1c/26/gangamati-lake.jpg?w=1200&h=-1&s=1',
    description: "The Gangamati Reserved Forest is an evergreen mangrove forest located on the eastern end of the beach of Kuakata, in Patuakhali, Bangladesh . It's known as a natural barrier that protects the coast from tidal surges.  The forest is also a beautiful place to visit, with interesting plant and animal life."
  }
];

const Forest = () => {
  const [open, setOpen] = useState(false);
  const [selectedForest, setSelectedForest] = useState(null);

  const handleClickOpen = (forest) => {
    setSelectedForest(forest);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedForest(null);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {forests.map((forest, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(forest)}>
                <CardMedia
                  component="img"
                  alt={forest.title}
                  height="200"
                  image={forest.image}
                  title={forest.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {forest.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="forest-dialog-title">
        <DialogTitle id="forest-dialog-title">
          {selectedForest?.title}
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
            {selectedForest?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Forest;
