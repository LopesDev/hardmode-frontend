import Link from 'next/link';

import {
    WellcomeSection, SVGWrapper, WellcomeBox, BoxFooter, AnchorWithIcon, Anchor
} from './styled';

function WellcomeSectionContainer() {
    return (
        <WellcomeSection>
            
            <WellcomeBox>
                <h3>Bem vindo ao clan HardMode</h3>

                <p>
                    Caso não possui um cadastro de membro, não perca tempo e faça seu registro agora mesmo!
                    Caso não possui um cadastro de membro, não perca tempo e faça seu registro agora mesmo!
                    Caso não possui um cadastro de membro, não perca tempo e faça seu registro agora mesmo!
                    Caso não possui um cadastro de membro, não perca tempo e faça seu registro agora mesmo!
                </p>

                <BoxFooter>
                    <Link href="/register">
                        <AnchorWithIcon href="/register">
                            <span>Criar um usuário</span>
                            <img src="/icons/dashicons_arrow-right-alt2.svg" alt="Go to register" />
                        </AnchorWithIcon>
                    </Link>

                    <Link href="/members">
                        <Anchor href="/members">
                            Ver membros cadastrados
                        </Anchor>
                    </Link>
                </BoxFooter>
            </WellcomeBox>

            <SVGWrapper>
                <img src="/img/wellcome-player.svg" alt="Wellcome player" />
            </SVGWrapper>

        </WellcomeSection>
    );
}

export default WellcomeSectionContainer;