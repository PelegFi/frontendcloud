import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Dish({id,name,image,description,is_vegeterian,is_gluten_free}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={`${image}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       is gluten free : {is_gluten_free.toString()}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       is vegeterian : {is_vegeterian.toString()}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default Dish