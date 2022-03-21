import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({userInfo}) => {
  console.log(userInfo);
  const {AutherName,CourseName,image,rating,id} = userInfo;
  return (
   
    <div >
       <div className="p-5">
      <Card >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={CourseName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {CourseName}
        </Typography>
        <Typography  variant="body2" sx={{marginBottom:"10px"}} color="text.secondary">
         {AutherName}
        </Typography>
        <Stack spacing={1}>
      {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Stack>
      </CardContent>
      <CardActions>
        <Button variant="outlined">$Free</Button>
        <Link to={`/post/${id}`}>
        <Button variant="contained">Start Now</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    </div>
  )
}

export default PostCard
