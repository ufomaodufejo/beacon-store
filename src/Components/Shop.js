import React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Delete, ShoppingCart } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import shop1 from "./assets/shop1.png";
import shop2 from "./assets/shop2.png";
import shop3 from "./assets/shop3.png";
import shop4 from "./assets/shop4.jpg";
import shop5 from "./assets/shop5.jpg";
import shop6 from "./assets/shop6.jpg";

const imgStyle = {
  width: '100%',
  maxHeight: '14rem',
};

function Card(props) {
  return (
    <Grid item xs={4}>
      <Paper elevation={6} sx={{ maxHeight: 380, marginBottom: 0 }}>
        <Typography variant="body2" component="h3" noWrap="true" color="grey">
            {props.genre}
          </Typography>
        <img src={props.img} alt="" style={imgStyle} />
        <Box paddingX={2}>
          <Typography variant="body2" component="h3" noWrap="true">
            {props.title}
          </Typography>
          <Box>
            <Rating name="read-only" value={props.value} readOnly precision={0.5} size="small" />
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{ textDecoration: 'line-through' }}
            >
              {props.oldprice}
            </Typography>
            <Typography variant="caption" marginLeft={1} color="error">
              {props.newprice}
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper elevation={6} sx={{marginTop: 0}}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}
          paddingY={2}
        >
          <Box marginLeft={2}>
          </Box>
          <Box>
            <Button variant="contained" color="error">
              <ShoppingCart />
              <Typography variant="caption">Add to cart</Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

const Shop = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={5}>
          <Card
           genre ="FICTION"
            img={shop1}
            title="A conspiracy of Ravens"
            value="4"
            oldprice="#6,000.00"
            newprice="#5,500.00"
          />

          <Card
            genre ="FICTION"
            img={shop2}
            title="The Days of silence"
            value="4.5"
            oldprice="#5,000.00"
            newprice="$4,500.00"
          />

          <Card
          genre="AUTOBIOGRAPHY"
            img={shop3}
            title="Alajoota"
            value="4.5"
            newprice="#9,000.00"
          />

          <Card
            genre="CHILDREN"
            img={shop4}
            title="Count from 0 to 20"
            value="4.5"
            oldprice="#2,500.00"
            newprice="#2,000.00"
          />

          <Card
            genre="PSYCHOLOGY"
            img={shop5}
            title="Biased"
            value="4.5"
            oldprice="#6,000.00"
            newprice="#5,500.00"
          />

          <Card
            genre="ACTION"
            img={shop6}
            title="Ali Cross"
            value="5"
            newprice="#4,500.00"
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Shop;
export { Card };
