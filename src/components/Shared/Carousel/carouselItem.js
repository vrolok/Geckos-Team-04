import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemBody = styled.div`

  min-width: 75%;
  max-width: 75%;
  padding: 0 5px;

  }
  @media (min-width: 482px) {
    min-width: 50%;
    max-width: 50%;
  }
  @media (min-width: 701px) {
    min-width: 33.33%;
    max-width: 33.33%;
  }
  @media (min-width: 1011px) {
    min-width: 25%;
    max-width: 25%;
  }
`;

const ItemBodyLarge = styled(Link)`
 min-width: 75%;
  max-width: 75%;
  padding: 0 5px;
  display: block;
  text-decoration: none;
  }
  @media (min-width: 482px) {
    min-width: 50%;
    max-width: 50%;
  }
  @media (min-width: 1011px) {
    min-width: 33.33%;
    max-width: 33.33%;
  }
  `;

const carouselItem = ({ children }) => <ItemBody>{children}</ItemBody>;

export const CarouselItemWrapper = ({ children, title }) => (
  <ItemBodyLarge to={`/${title.toLowerCase().replace(/ /, '-')}/near-me`}>{children}</ItemBodyLarge>
);

export default carouselItem;
