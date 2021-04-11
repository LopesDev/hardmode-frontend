import Link from 'next/link';
import { useTheme } from 'styled-components';
import { ArrowRight } from '../../icons';

import {
    WellcomeSection, SVGWrapper, WellcomeBox, BoxFooter, AnchorWithIcon, Anchor
} from './styled';

function WellcomeSectionContainer() {
    const theme = useTheme();

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
                    <Link href="/sign-up">
                        <AnchorWithIcon>
                            <span>Criar um usuário</span>
                            <ArrowRight color={theme.pallet.grey} />
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