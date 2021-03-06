import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { StyledCard } from '../Card';
import CardHeader from '../CardHeader';
import CardName from '../CardName';
import CardTitle from '../CardTitle';
import CardBody from '../CardBody';
import { LocationIcon, PricingIcon } from '../../Icon/Icon';

const StyledServiceCard = StyledCard.extend`
  width: ${props => {
    const { width } = props;
    return (
      css`
        ${width};
      ` || 'inherit'
    );
  }};
  box-shadow: ${props => {
    const { boxShadow } = props;
    return css`
      ${boxShadow};
    `;
  }};
`;

export const ServiceHeader = CardHeader.extend`
background-image: url('${({ image }) => image}}');
height: 12rem;
`;

const ServiceCardBody = CardBody.extend`
  padding-top: 0;
  padding-left: 0;
`;

const ServiceCardName = CardName.extend`
  font-weight: bold;
  justify-content: left;
`;

const ServiceCardTitle = CardTitle.extend`
  justify-content: left;
`;

const ServiceCard = props => {
  const {
    service: { name, image },
    width,
    boxShadow,
    children,
  } = props;

  return (
    <StyledServiceCard width={width} boxShadow={boxShadow}>
      <ServiceHeader image={image} role="img" aria-label={name} />
      <ServiceCardBody>
        <ServiceCardName>&nbsp;{name}</ServiceCardName>
        <ServiceCardTitle>{children}</ServiceCardTitle>
      </ServiceCardBody>
    </StyledServiceCard>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  width: PropTypes.string,
  boxShadow: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

ServiceCard.defaultProps = {
  width: 'inherit',
  boxShadow: 'none',
};
const ServiceTitle = styled.div`
  padding: 16px 16px 12px;
  font-size: 1rem;
  font-weight: bold;
  color: #2f3033;
  ${({ catPage }) => (catPage ? 'font-weight: normal' : '')};
  ${({ catPage }) => (catPage ? 'text-align: center' : '')};
`;
const StyledServiceHeader = ServiceHeader.extend`
  border-radius: 4px 4px 0 0;
  margin: 0;
  height: 10rem;
`;
const PureServiceCard = props => {
  const {
    service: { name, catPage, image },
  } = props;

  const width = '100%';
  const boxShadow = '0 -1px 1px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.16)';
  return (
    <StyledServiceCard width={width} boxShadow={boxShadow}>
      <StyledServiceHeader image={image} role="img" aria-label={name} />
      <ServiceTitle catPage={catPage}>{name}</ServiceTitle>
    </StyledServiceCard>
  );
};

const ServiceLocationCard = props => {
  const { service, width } = props;
  return (
    <ServiceCard service={service} width={width}>
      <LocationIcon />
      <span>See pros near you</span>
    </ServiceCard>
  );
};

ServiceLocationCard.propTypes = {
  service: PropTypes.object.isRequired,
  width: PropTypes.string,
};

ServiceLocationCard.defaultProps = {
  width: 'inherit',
};

const ServicePricingCard = props => {
  const { service, width } = props;
  return (
    <ServiceCard service={service} width={width}>
      <PricingIcon />
      <ServiceCardTitle>&nbsp;See prices</ServiceCardTitle>
    </ServiceCard>
  );
};

ServicePricingCard.propTypes = {
  service: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

const CategoryCard = props => {
  const {
    service,
    service: { pros },
    width,
    height,
  } = props;
  const title = `${pros} pros near you`;
  const boxShadow = '0 -1px 1px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.16)';
  return (
    <ServiceCard service={service} boxShadow={boxShadow} width={width} height={height}>
      <LocationIcon />
      <ServiceCardTitle>&nbsp;{title}</ServiceCardTitle>
    </ServiceCard>
  );
};

CategoryCard.propTypes = {
  service: PropTypes.object.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

CategoryCard.defaultProps = {
  width: '200px',
  height: '219px',
};

export default ServiceCard;
export {
  ServiceLocationCard,
  ServicePricingCard,
  CategoryCard,
  StyledServiceCard,
  ServiceCardBody,
  PureServiceCard,
};
