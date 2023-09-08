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
      <CardContent className="Ad_content">
        <Typography variant="subtitle1" className="Ad_title">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="Ad_description">
          {description}
        </Typography>
        <Typography variant="body1" className="Ad_price">
          Price: ${price}
        </Typography>
        {ad_url && (
          <Link href={ad_url} target="_blank" rel="noopener noreferrer">
            Learn More
          </Link>
        )}

{personalizedText !== null && (
        <div className="Ad_personalizedText">
          <Typography variant="body2" className="Ad_personalizedText_content">
            {personalizedText}
          </Typography>
        </div>
      )}
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
