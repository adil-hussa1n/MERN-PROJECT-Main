import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogContent, DialogTitle, IconButton, Grid, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const islands = [
  {
    title: 'Saint Martin Island',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c2/97/93/pure-blue-crytal-clear.jpg?w=1200&h=-1&s=1',
    description: "Saint Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula. It is the only coral island in Bangladesh."
  },
  {
    title: 'Maheshkhali Island',
    image: 'https://www.travelmate.com.bd/wp-content/uploads/2019/03/Maheshkhali-Island.jpg.webp',
    description: "Maheshkhali is an island of Cox’s Bazar district. It is only 12 kilometers away from Cox’s Bazar. It is reported that the island was formed after the severe cyclonic storm and the tidal surge in 1559, separated from the mainland. It was named after the Buddhist monk Maheshwar about 200 years ago. It is also known as Maheshkhali Island. The area of ​​Maheshkhali Island is 362.18 sq km, and it is the only Hilly island of Bangladesh. There are three small islands named Sonadia, Matarbari, and Dholghata in Maheshkhali Upazila. From the Maheshkhali Island, Chakaria Upazila on the north-east of the Upazila, Cox’s Bazar headquarters south-east, the Bay of Bengal on the south-west, Kutubdia Upazila on the northwest. This Upazila is famous for the production of Betel Leaf, fish, dried fish, shrimp, salt and pearls. Maheshkhali Channel, the north-south direction of the Upazila, has separated the island from the mainland and the Bay of Bengal. On 15 December 1983, Maheshkhali thana was changed to Upazila. If you ride 4-5 hours from Cox’s Bazar, then you can easily visit Maheskhali Island."
  },
  {
    title: 'Chhera Island',
    image: 'https://www.travelmate.com.bd/wp-content/uploads/2019/07/Chera-Dwip-in-Saint-Martins-Island-768x443.jpg',
    description: "Chera Dwip (Chhera Island) is the southernmost land of Bangladesh. It is located about 5 kilometers south of St. Martin, the coral island. To the locals, the island is also known as ‘Chheradia’ or ‘Syradiya’. The Chera island is full of natural stone, coral and coconut trees. During the high tide, one-third of the island submerge under the sea. When the blue wave of the sea is rubbed on the stone, it creates a beautiful scene in the Chhera Island. The area of Chhera Island is nearly 3 KM. In the late 2000s, the island was discovered. Every year thousands of tourists visit the Chhera island to see the Blue Sea, the sky and the sunset. Along with the light of the moon, it creates a magical fascination. So many people come to camping on the night of this wonderful island."
  }
];

const Island = () => {
  const [open, setOpen] = useState(false);
  const [selectedIsland, setSelectedIsland] = useState(null);

  const handleClickOpen = (island) => {
    setSelectedIsland(island);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIsland(null);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {islands.map((island, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(island)}>
                <CardMedia
                  component="img"
                  alt={island.title}
                  height="200"
                  image={island.image}
                  title={island.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {island.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="island-dialog-title">
        <DialogTitle id="island-dialog-title">
          {selectedIsland?.title}
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
            {selectedIsland?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Island;
