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
    border-radius: ${({theme}) => theme.spacing(1)};
    border: solid 1px #FFAD61;
    padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(2)};
    transition: all .2s;

    @keyframes shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
      
      20%, 80% {
        transform: translate3d(2px, 0, 0);
      }
    
      30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
      }
    
      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
    }

    &:hover {
        transition: all .2s;
        border: solid 1px #FFBE82;
        background-color: #FFBE82;
        > svg {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
    }
`

const Avatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`

const Typo = styled.p`
    color: #4F4F4F;
    line-height: 100%;
    font-family: ${({theme}) => theme.typografy.text.fontFamily};
    font-weight: ${({theme}) => theme.typografy.text.regular};
`

export {
    Section, Container, Wrapper, MembersBox, Avatar, MemberContainer, Typo
};
