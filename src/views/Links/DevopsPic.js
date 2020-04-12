import React from 'react';
import devopsPic from '../../images/devops.png';
import styled from 'styled-components';

export default function DevopsPic() {
    return(
        <StyledDiv>
            <StyledImg src={devopsPic}/>
        </StyledDiv>   
    );
}

const StyledImg = styled.img`
    width:10em;
`;
const StyledDiv = styled.div`
    display: flex;
    align-content: flex-end;
    // margin-bottom:-30em;
`