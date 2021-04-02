import {
    Section, Container, Wrapper, MembersBox, MemberContainer, Avatar, Typo
} from './styled'
import ArrowRight from '../../icons/arrow-right'
import Link from 'next/link'

const users = [
    {
        name: 'Gabriel "Fush" Lopes',
        pts: 200,
        slug: 'fush',
        image: 'https://scontent.fbsb4-1.fna.fbcdn.net/v/t1.18169-9/26230639_1645142428880625_6186949451689150514_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEGrDpSEXRuuzPhx-HspEwskt3xYqjSIuCS3fFiqNIi4CwtkXxAGG4cSkoj4hJlM8oVavuzvs32nMZmnikbalW6&_nc_ohc=w7SUqyBWhvsAX_HbEWD&_nc_ht=scontent.fbsb4-1.fna&oh=d7f4dd47d1c50c4cb9b30e6042a0b93e&oe=60889215'
    },
    {
        name: 'Matheus "Nimbo" Lopes',
        pts: 150,
        slug: 'nimbo',
        image: 'https://scontent.fbsb4-1.fna.fbcdn.net/v/t1.6435-9/83366661_2853460698026500_4661294518488793088_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH3azyCP4v7MwJeFcVLkBOKJVadKuzeMY8lVp0q7N4xj_fL_i7yycEWdA0tlHDeZokE7DtngGsZRLsluBePW7r5&_nc_ohc=7RBKFZ2B8GkAX_XXFvm&_nc_ht=scontent.fbsb4-1.fna&oh=7e56660aaad606f0e6306bbc80bf1cd9&oe=60881E44'
    }
]

function MembersSection() {
    return (
        <Section>
            <Container>
                <h3 style={{ width: '100%' }}>Nossos membros</h3>
                <Wrapper>
                    <MembersBox>
                        <h4 style={{ marginBottom: 12 }}>Top 5 membros</h4>
                        {
                            users.map(u => (
                                <Link href={`/usuario/${u.slug}`}>
                                    <a>
                                        <MemberContainer>
                                            <div style={{ display: 'flex', alignItems: 'center', width: 270 }}>
                                                <Avatar
                                                    src={u.image}
                                                    alt={`${u.name} avatar`}
                                                />
                                                <Typo style={{ marginLeft: 16 }}>{u.name}</Typo>
                                            </div>
                                            <Typo>{u.pts} PTs</Typo>
                                            <ArrowRight />
                                        </MemberContainer>
                                    </a>
                                </Link>
                            ))
                        }
                        {
                            users.length > 4
                            ?
                                <Link href="/membros">
                                    <a style={{ color: '#2D9CDB' }}>Ver mais</a>
                                </Link>
                            :   null
                        }
                    </MembersBox>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default MembersSection
