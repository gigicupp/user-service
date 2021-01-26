import React, { useState } from 'react';
import HostId from './HostId';
import styled from 'styled-components';
import { data } from '../../../testdata';
import { query } from '../utils';

const HostSectionContainer = styled.section`
  width: 0 auto;
  padding: 32px 24px;
  @media (min-width: ${query.medium}) {
    padding: 48px 40px;
  }
  @media (min-width: ${query.large}) {
    padding: 48px 80px;
  }
`;

const HostSection = () => {
  const [ host, setHost ] = useState(data);
  return (
    <HostSectionContainer>
      <HostId host={host} />
    </HostSectionContainer>
  );
};

export default HostSection;