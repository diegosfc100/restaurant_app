import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => (
<Restaurant>
    <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
        <Address>Rua Diva Ines gutierrez, 31</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="foto teste"/>
</Restaurant>
);

export default RestaurantCard;