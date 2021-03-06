import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Section from '../../../Layout/Section/Section';
import { CategoryCard } from '../../../Shared/Cards/UtilCard/UtilCard';

import {
  HouseIcon,
  ConfettiIcon,
  AppleIcon,
  FlowerIcon,
  BriefCaseIcon,
  ButtonIcon,
  ScreenIcon,
  CourtHouseIcon,
  HandIcon,
  PawIcon,
  CameraIcon,
  WrenchIcon,
} from '../../../Shared/Icon/Icon';

const cardData = [
  {
    component: HouseIcon,
    to: 'home-improvement',
    name: 'Home',
  },
  {
    component: ConfettiIcon,
    to: 'events',
    name: 'Events',
  },
  {
    component: AppleIcon,
    to: 'lessons',
    name: 'Lessons',
  },
  {
    component: FlowerIcon,
    to: 'wellness',
    name: 'Wellness',
  },
  {
    component: BriefCaseIcon,
    to: 'more-services#category-group-business',
    name: 'Business',
  },
  {
    component: ButtonIcon,
    to: 'more-services#category-group-crafts',
    name: 'Crafts',
  },
  {
    component: ScreenIcon,
    to: 'more-services#category-group-designWeb',
    name: 'Design & Web',
  },
  {
    component: CourtHouseIcon,
    to: 'more-services#category-group-legal',
    name: 'Legal',
  },
  {
    component: HandIcon,
    to: 'more-services#category-group-personal',
    name: 'Personal',
  },
  {
    component: PawIcon,
    to: 'more-services#category-group-pets',
    name: 'Pets',
  },
  {
    component: CameraIcon,
    to: 'more-services#category-group-photography',
    name: 'Photography',
  },
  {
    component: WrenchIcon,
    to: 'more-services#category-group-repairSupport',
    name: 'Tech Repair',
  },
];
const SectionTitle = styled.div`
  text-align: left;
`;
const CardSubsection = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  div:first-child a {
    border-radius: 4px 4px 0 0;
  }

  div:last-child a {
    border-radius: 0 0 4px 4px;
  }

  display: block;
  @media only screen and (min-width: 480px) {
    div a {
      border: initial;
      border-radius: 4px;
    }
    div:first-child a {
      border-radius: 4px;
    }

    div:last-child a {
      border-radius: 4px;
    }

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const GetIcon = ({ tag }) => {
  const TagName = tag;
  return <TagName size="28" />;
};

GetIcon.propTypes = {
  tag: PropTypes.element.isRequired,
};

const CenterLink = styled(Link)`
  display: none;
  text-decoration: none;
  color: #009fd9;
  text-align: center;
  margin-top: 50px;

  @media (min-width: 482px) {
    display: block;
  }
`;

const allServicesSection = () => (
  <Section isNarrow isGray hasBorder>
    <SectionTitle>
      <h3>All Services</h3>
    </SectionTitle>
    <CardSubsection>
      {cardData.map(({ component, name, to }) => (
        <CategoryCard key={name} utility={{ name, categoryName: to }}>
          <GetIcon tag={component} />
        </CategoryCard>
      ))}
    </CardSubsection>
    <CenterLink to="/more-services">See more services</CenterLink>
  </Section>
);

export default allServicesSection;
