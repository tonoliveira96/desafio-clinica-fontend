import React from 'react';

import { Container } from './styles';

interface ITagProps{
  content: string;
}

const TagService: React.FC <ITagProps>= ({content}) => {
  return (
    <Container>
      {content}
    </Container>
  );
}

export default TagService;
