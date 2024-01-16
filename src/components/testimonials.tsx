'use client'

import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react'

const testimonials = [
    {
        name: 'Harry Schuster',
        role: 'Alumnus - Joined Spring 2017',
        content:
            'Delt has continued to help me in my life even past graduation. In addition to all of the leadership skills I picked up while at the chapter, I also enjoy benefits like being able to drop by the house when I happen to be on campus and having a consistent place to tailgate for when I return for home games. Although it has been a couple of years since I graduated, I always look forward to meeting the new guys since I know our house can pick friendly and quality people to continue on our letters.',
        avatar:
            'images/testimonials/harry.png'
    },
    {
        name: 'Reetesh Sudhakar',
        role: 'Brother - Joined Fall 2021',
        content:
            'Delt has been a community that has helped me constantly grow throughout college. Whether it was figuring out how to handle my course load, opening myself up to others, or getting my first job, I’ve always been able to lean on the brothers for their advice and support. As a Delt, I’m also able to give back to others with countless opportunities like Trees Atlanta, JDRF, or Walk for Diabetes. My time as a Delt has helped me grow to become the best version of myself.',
        avatar:
            'images/testimonials/ree.png'
    },
    {
        name: 'Nicole Caiati',
        role: 'Former Sweetheart - Alpha Xi Delta',
        content:
            'Being around the Delts always makes me so happy because I know that I’m surrounded with a house of guys that will have my back no matter what, and will drop anything to help me at any time. I’ve had some of my best college memories with these guys because they’re truly kind and genuine people that I feel very fortunate to be so close with.',
        avatar:
            'images/testimonials/nicole.png'

    },
    {
        name: 'Laura Jeniski',
        role: 'Alpha Gamma Delta',
        content:
            'My favorite thing about Delt is the people! I’ve had brothers there to pick me up when I fall (literally & figuratively), help when I am stuck on an O-Chem problem, play volleyball in the backyard, and tailgate a football or baseball game. I feel that I am welcomed by everyone and always have a good time hanging out! Can’t wait to smash some more pies at Pelt-A-Delt!',
        avatar:
            'images/testimonials/laura.png'
    },
    {
        name: 'Jason Wang',
        role: 'Alumnus - Joined Fall 2017',
        content:
            'I joined GT Delt back in 2017, and it was the best decision that I made in my college career. The upperclassmen could guide me through my academic and professional development, and the underclassmen gave me support in my day to day life. I was given opportunities as a leader the second that I joined, and was able to cultivate those skills to culminate into serving on the IFC executive board and being the president of our chapter. I made many friends across campus and the nation that I wouldn’t have otherwise through Delt. I have had several jobs throughout college with fortune 25 companies that I wouldn’t have gotten without the help that I received from my fellow brothers. The professional network that we have is one of the most valuable things to have as someone looking to gain real job experience during college. I have met lifelong brothers in this organization, and I can’t think of anyone else that I would’ve wanted to spend my college years with. Here’s to growing our chapter and living lives of excellence, I wish you luck in your college career!',
        avatar:
            'images/testimonials/jason.png'
    },
]

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
]

interface TestimonialCardProps {
    name: string
    role: string
    content: string
    avatar: string
    index: number
}

function TestimonialCard(props: TestimonialCardProps) {
    const { name, role, content, avatar, index } = props
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'inherit'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            _after={{
                content: '""',
                position: 'absolute',
                height: '21px',
                width: '29px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
                backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
                backgroundImage: backgrounds[index % 4],
            }}>
            <Flex direction={'column'} textAlign={'justify'} justifyContent={'space-between'}>
                <chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span fontWeight={'medium'} color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    )
}

export default function GridBlurredBackdrop() {
    return (
        <Flex
            textAlign={'center'}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}
        >
            <SimpleGrid columns={{ base: 1, xl: 1 }} spacing={'20'} mt={16} mb={16} mx={'auto'}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard key={index} {...cardInfo} index={index} />
                ))}
            </SimpleGrid>
        </Flex>
    )
}