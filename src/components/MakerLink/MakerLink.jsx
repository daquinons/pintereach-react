import React from 'react';
import styled from 'styled-components';

const MakerLink = () => (
  <Link target="_blank" rel="noopener" href="https://twitter.com/daquinons">
    <Image src="https://s.gravatar.com/avatar/a1ede2ec7577b8925b05c9a8f37bb47c?s=80" />
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
