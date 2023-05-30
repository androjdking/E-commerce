import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();
    console.log(product);
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} src={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography vyriant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography vyriant="h5">
                       {product.price}
                   </Typography>
               </div>
               <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;