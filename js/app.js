new Vue ({
    el: '#app',
    data: {
        contactsInfo: {
            supportPhoneNumber: '1.800.123.4567',
            phoneNumber: '(1) 234 5678',
            emailAddress: 'info@your-company.com',
            address: '1234 Avada Avenue Avadaville'
        },
        shopLink: '#',
        menu: {
            link1: {
                name: 'Home',
                link: '#',
                dd: true,
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
                dropdown: [{}]
            },
            link4: {
                name: 'Blog',
                link: '#',
                dd: false,
                dropdown: [{}]
            },
            link5: {
                name: 'Contact',
                link: '#',
                dd: false,
                dropdown: [{}]
            },
            link6: {
                name: 'Shop By Brand',
                link: '#',
                dd: true,
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
        }

    }
})