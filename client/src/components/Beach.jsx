import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogContent, DialogTitle, IconButton, Grid, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const beaches = [
  {
    title: 'Cox\'s Bazar Beach',
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg',
    description: "It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. At 150 kilometers (93 miles), it's often referred to as the world's longest natural unbroken sea beach."
  },
  {
    title: 'Inani Beach',
    image: 'https://ronzusgreenworld.wordpress.com/wp-content/uploads/2013/02/inani-11.jpg',
    description: "Inani Beach is a beautiful beach that is part of the long stretch of beachfront that makes up Cox's Bazar. It's about 18 kilometers long."
  },
  {
    title: 'Kuakata Beach',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a9/8b/44/sea-beach.jpg?w=1100&h=-1&s=1',
    description: "Kuakata Beach, also known as Sagor Kannya (Daughter of the Sea), is a panoramic sea beach on the southernmost tip of Bangladesh. Located in the Patuakhali district, Kuakata is a popular tourist destination for its long, sandy beach, stunning sunrises and sunsets."
  },
];

const Beach = () => {
  const [open, setOpen] = useState(false);
  const [selectedBeach, setSelectedBeach] = useState(null);

  const handleClickOpen = (beach) => {
    setSelectedBeach(beach);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBeach(null);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {beaches.map((beach, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledCard>
              <CardActionArea onClick={() => handleClickOpen(beach)}>
                <CardMedia
                  component="img"
                  alt={beach.title}
                  height="180"
                  image={beach.image}
                  title={beach.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {beach.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="beach-dialog-title">
        <DialogTitle id="beach-dialog-title">
          {selectedBeach?.title}
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
            {selectedBeach?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Beach;

