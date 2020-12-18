import React from 'react';

import { Container } from './styles';

interface ITagProps{
  content: string;
}

const TagService: React.FC <ITagProps>= ({content, ...rest}) => {
  const serviceArray = content.split(',')
  return (
    <Container {...rest}>
      {serviceArray.map((data)=>{
        return(<span key={data}>{data}</span>)
      })}
    </Container>
  );
}

export default TagService;
