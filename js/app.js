new Vue ({
    el: '#app',
    data: {
        contactsInfo: {
            supportPhoneNumber: '1.800.123.4567',
            phoneNumber: '(1) 234 5678',
            emailAddress: 'info@your-company.com',
            address: '1234 Avada Avenue Avadaville'
        },
        usefulLinks: {
            account: '#',
            orders: '#',
            checkout: '#',
            cart: '#',
        },
        shopLink: '#',
        menu: {
            link1: {
                name: 'Home',
                link: '#',
                dd: true,
                footer: true,
                dropdown: [
                    {
                        name: 'dd 1',
                        link: '#'
                    },
                    {
                        name: 'dd 2',
                        link: '#'
                    },
                    {
                        name: 'dd 3',
                        link: '#'
                    },
                    {
                        name: 'dd 4',
                        link: '#'
                    },
                ]
            },
            link2: {
                name: 'Shop',
                link: '#',
                dd: true,
                footer: true,
                dropdown: [
                    {
                        name: 'dd 1',
                        link: '#'
                    },
                    {
                        name: 'dd 2',
                        link: '#'
                    },
                    {
                        name: 'dd 3',
                        link: '#'
                    },
                    {
                        name: 'dd 4',
                        link: '#'
                    },
                ]
            },
            link3: {
                name: 'About',
                link: '#',
                dd: false,
                footer: true,
                dropdown: [{}]
            },
            link4: {
                name: 'Blog',
                link: '#',
                dd: false,
                footer: true,
                dropdown: [{}]
            },
            link5: {
                name: 'Contact',
                link: '#',
                dd: false,
                footer: true,
                dropdown: [{}]
            },
            link6: {
                name: 'Shop By Brand',
                link: '#',
                dd: true,
                footer: false,
                dropdown: [
                    {
                        name: 'dd 1',
                        link: '#'
                    },
                    {
                        name: 'dd 2',
                        link: '#'
                    },
                    {
                        name: 'dd 3',
                        link: '#'
                    },
                    {
                        name: 'dd 4',
                        link: '#'
                    },
                ]
            }
        },
        socialPages: {
            social1: {
                name: 'Facebook',
                link: '#',
                icon: 'fab fa-facebook-f'
            },
            social2: {
                name: 'Twitter',
                link: '#',
                icon: 'fab fa-twitter'
            },
            social3: {
                name: 'Instagram',
                link: '#',
                icon: 'fab fa-instagram'
            },
            social4: {
                name: 'Youtube',
                link: '#',
                icon: 'fab fa-youtube'
            }
        }
    }
})