import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles'
const Products = () => {
    const products=[
        {id:1,name:"Shoes",description:"Running shoes",price:"$5",image:"https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg"},
        {id:2,name:"Macbook",description:"Apple Macbook",price:"$10",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"},
    ]

    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Grid container justify="center" spacing={4}>
                    {products.map((product)=>(
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
            
        </main>
    )
}

export default Products
