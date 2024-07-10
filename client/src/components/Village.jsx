import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogContent, DialogTitle, IconButton, Grid, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const villages = [
  {
    title: 'Sylhet Tea Gardens',
    image: 'https://example.com/sylhet_tea_gardens.jpg',
    description: "Sylhet is famous for its tea gardens which spread over many acres of land. These gardens provide a picturesque view of lush greenery and rolling hills."
  },
  {
    title: 'Tangail Jamdani Villages',
    image: 'https://example.com/tangail_jamdani.jpg',
    description: "Tangail is known for its Jamdani weaving tradition, and the villages around Tangail showcase this craft beautifully. Visitors can experience the weaving process and see intricate Jamdani designs."
  },
  {
    title: 'Rangamati Hill Villages',
    image: 'https://example.com/rangamati.jpg',
    description: "Rangamati is home to many indigenous communities living in picturesque hill villages. These villages offer stunning views of the hills, lakes, and the unique culture of the indigenous people."
  }
];

const Village = () => {
  const [open, setOpen] = useState(false);
  const [selectedVillage, setSelectedVillage] = useState(null);

  const handleClickOpen = (village) => {
    setSelectedVillage(village);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVillage(null);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {villages.map((village, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(village)}>
                <CardMedia
                  component="img"
                  alt={village.title}
                  height="200"
                  image={village.image}
                  title={village.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {village.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="village-dialog-title">
        <DialogTitle id="village-dialog-title">
          {selectedVillage?.title}
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
            {selectedVillage?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Village;
