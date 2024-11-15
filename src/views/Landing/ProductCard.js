import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        sx={{width:"100%",margin:"auto", p:2,objectFit:"contain"}}
        image={product.product_image}
      />
      <CardContent style={{paddingInline:"5px",paddingBottom:"0px"}}>
        <Typography style={{minHeight:"50px",maxHeight:"50px", textAlign:"center" }}
           >
          {_.truncate(_.trim(product.name), { length: 25 })}
        </Typography>
        <Typography fontSize={"16px"} style={{color:"#00000099"}} color="primary">
          R {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <Button size="small" variant='outlined' color="success" onClick={() => {
          navigate(`/product/${product.id}`)
        }}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
