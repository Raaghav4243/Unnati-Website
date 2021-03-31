import React from 'react';

import {
  CourseOverviewHeaderContainer,
  CourseOverviewHeaderWrapper,
  CourseNameWrapper,
  CourseFeesWrapper,
  CourseAvailableAtWrapper,
  AvailableAtTitle,
} from './course-overview-header.styles';

let returnPriceRange = (availableAt) => {
  if (!availableAt || availableAt.length === 0) {
    return 'No price available.';
  }
  let minPrice = Number.MAX_VALUE;
  let maxPrice = Number.MIN_VALUE;
  // console.log('AVAILABLE AT ARRAY', availableAt);
  if (availableAt) {
    availableAt.map((obj) => {
      minPrice = Math.min(minPrice, obj.amount);
      maxPrice = Math.max(maxPrice, obj.amount);
      return null;
    });
  }
  // : null;
  // console.log('MIN PRICE FOR COURSE', minPrice);
  // console.log('MAX PRICE FOR COURSE', maxPrice);
  // minPrice = minPrice.toString();
  return minPrice === maxPrice ? `${maxPrice}` : `${minPrice}-${maxPrice}`;
};

const CourseOverviewHeader = (props) => {
  const { name, availableAt, forUser, fees, cafeName } = props;
  let priceRange = returnPriceRange(availableAt);
  return (
    <CourseOverviewHeaderContainer>
      <CourseOverviewHeaderWrapper>
        <CourseNameWrapper>{name}</CourseNameWrapper>

        {forUser ? (
          <CourseFeesWrapper> &#8377;{fees}</CourseFeesWrapper>
        ) : (
          <CourseFeesWrapper> &#8377;{priceRange}</CourseFeesWrapper>
        )}
        {forUser ? ( // <CourseFeesWrapper> &#8377;{fees}</CourseFeesWrapper>
          <CourseAvailableAtWrapper>
            <AvailableAtTitle>Details for :</AvailableAtTitle>
            <span style={{ color: 'white', fontWeight: '100' }}>
              {' '}
              | {cafeName} |{' '}
            </span>
            {/* {cafeName} */}
          </CourseAvailableAtWrapper>
        ) : (
          <CourseAvailableAtWrapper>
            <AvailableAtTitle>Available at:</AvailableAtTitle>
            <span style={{ color: 'white', fontWeight: '100' }}> | </span>
            {availableAt
              ? availableAt.map((obj) => {
                  if (obj.cafe) {
                    return (
                      <span
                        key={obj.cafe._id}
                        style={{ color: 'white', fontWeight: '100' }}
                      >
                        {' '}
                        {obj.cafe.name} |
                      </span>
                    );
                  }
                })
              : null}
          </CourseAvailableAtWrapper>
        )}
      </CourseOverviewHeaderWrapper>
    </CourseOverviewHeaderContainer>
  );
};

export default CourseOverviewHeader;
