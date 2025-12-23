import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container/Container";

export const Invitation:React.FC = () => {
    return (
        <InvitationStyled >
            <Container>
                <SectionTitle>
                    I Am Available For Freelance
                </SectionTitle>
                <Button>
                    hire me
                </Button>
            </Container>


        </InvitationStyled>
    );
};

export default Invitation ;

const InvitationStyled = styled.section`
${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
}    
    ${SectionTitle} {
        margin-bottom: 80px;
    }

    
`
