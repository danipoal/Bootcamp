import styled from 'styled-components';
import { useState } from 'react'


// Define el componente estilizado
const StyledDiv = styled.button`
    width: 60px;
    height: 60px;
`;

function Square() {
  const [value, setValue] = useState(" ");

  function handleClick() {
    setValue('X');
  }

  return (
    <StyledDiv onClick={handleClick}>
      {value}
    </StyledDiv>
  );
}

export default Square;
