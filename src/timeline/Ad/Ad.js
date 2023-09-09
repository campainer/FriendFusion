import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link, CardActions } from '@mui/material';
import "./Ad.css";

function Ad({ title, description, price, image_url, ad_url, personalizedText, footerText }) {
  return (
    <Card className="Ad_card">
      <CardMedia
        component="img"
        alt={title}
        image={image_url}
        className="Ad_media"
      />
      <div className='Ad_link'>
        {ad_url && (
          <Link href={ad_url} target="_blank" rel="noopener noreferrer" >
            Learn More
          </Link>
        )}
      </div>
      <div className="Ad_personalizedText">
        {personalizedText !== null && (

          <Typography variant="body2" fontWeight="bold" className="Ad_personalizedText_content">
            {personalizedText}
          </Typography>

        )}
      </div>
   
      <CardContent className="Ad_content">
        <Typography variant="subtitle1" className="Ad_title">
          {title}
        </Typography>
        <Typography variant="body2"  style={{ fontWeight: 'semi-bold' }}color="textSecondary" className="Ad_description">
          {description}
        </Typography>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}  className="Ad_price">
          Price: ${price}
        </Typography>


      </CardContent>

      {footerText && (
        <CardActions>
          <Typography variant="body2" className="Ad_footerText">
            {footerText}
          </Typography>
        </CardActions>
      )}
    </Card>
  );
}

export default Ad;
