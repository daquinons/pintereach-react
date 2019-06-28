import React from 'react';
import styled from 'styled-components';

const MakerLink = () => (
<Link target="_blank" rel="noopener" href="https://twitter.com/daquinons">
<Image src="https://pbs.twimg.com/profile_images/1123476640582049792/g-ftoX3x_200x200.png" />
<Text>by David</Text>
</Link>
);
export default MakerLink;
const Link = styled.a`
  font-family: 'Helvetica Neue', sans-serif;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
  border-top-left-radius: 5px;
  padding: 6px;
  border-top: 1px solid #efefef;
  border-left: 1px solid #efefef;
  background: #fff;
  color: #6f6f6f;
  text-decoration: none;
  &:hover {
    background: #fff;
    color: #ff0075;
  }
`;

const Image = styled.img`
  border-radius: 100%;
  width: 22px;
  vertical-align: middle;
`;
const Text = styled.p`
  margin: 0;
  vertical-align: middle;
  display: inline;
  margin-left: 7px;
  font-weight: 500;
  font-size: 14px;
`;