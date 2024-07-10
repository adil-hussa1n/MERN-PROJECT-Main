import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogContent, DialogTitle, IconButton, Grid, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const forts = [
  {
    title: 'Lalbagh Fort',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/1._%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE.jpg/800px-1._%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A7%87%E0%A6%B0_%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE.jpg',
    description: "Lalbagh Fort, also known as Fort Aurangabad, is an incomplete 17th-century Mughal fort complex in Dhaka, Bangladesh. The fort stands before the Buriganga River in the southwestern part of the old city of Dhaka."
  },
  {
    title: 'Sonakanda Fort',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sonakanda_Fort8.jpg/250px-Sonakanda_Fort8.jpg',
    description: "Sonakanda Fort is a river fort situated in Narayanganj, Bangladesh, on the eastern bank of Shitalakshya River.[1] Though the time of its establishment could not be ascertained, historians believe that the river fort was built by Mir Jumla II, a Subahdar of Bengal under the Mughal Empire, to defend Dhaka and Narayanganj from pirates."
  },
  {
    title: 'Idrakpur Fort',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%E0%A6%87%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%95%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97_04.jpg/250px-%E0%A6%87%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%95%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97_04.jpg',
    description: "Idrakpur Fort is a river fort situated in the Munshiganj district of Bangladesh. The fort was built in the 17th century and is part of the river fort system built by the Mughal Empire."
  }
];

const Fort = () => {
  const [open, setOpen] = useState(false);
  const [selectedFort, setSelectedFort] = useState(null);

  const handleClickOpen = (fort) => {
    setSelectedFort(fort);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFort(null);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {forts.map((fort, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(fort)}>
                <CardMedia
                  component="img"
                  alt={fort.title}
                  height="200"
                  image={fort.image}
                  title={fort.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {fort.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="fort-dialog-title">
        <DialogTitle id="fort-dialog-title">
          {selectedFort?.title}
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
            {selectedFort?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Fort;
