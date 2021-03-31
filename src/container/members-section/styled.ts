import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    justify-content: center;

    background-color: ${({theme}) => `${theme.pallet.primary}`};
    margin: 0px auto;
    padding: ${({theme}) => `${theme.spacing(16)} ${theme.spacing(8)}`};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => `0 ${theme.spacing(8)}`};
    width: 100%;
    max-width: 1200px;

    h3 {
        font-size: 2.3rem;
        margin-bottom: ${({theme}) => theme.spacing(4)};
        font-family: ${({theme}) => theme.typografy.title.fontFamily};
        font-weight: ${({theme}) => theme.typografy.title.regular};
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const MembersBox = styled.div`
    width: 542px;
`

const MemberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 24px 0;
`

const Avatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`

const Typo = styled.span`
    color: #4F4F4F;
    line-height: 100%;
    font-family: ${({theme}) => theme.typografy.text.fontFamily};
    font-weight: ${({theme}) => theme.typografy.text.regular};
`

export {
    Section, Container, Wrapper, MembersBox, Avatar, MemberContainer, Typo
};
