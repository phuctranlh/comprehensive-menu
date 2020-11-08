// Tree data for menu
export const MenuData = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Programming",
        link: "/programming",
        items: [
            {
                name: "Front-end",
                link: "/programming/front-end",
                items: [
                    {
                        name: "ReactJS",
                        link: "/programming/front-end/reactjs"
                    },
                    {
                        name: "JavaScript",
                        link: "/programming/front-end/javascript"
                    },
                ]
            },
            {
                name: "Back-end",
                link: "/programming/back-end",
                items: [
                    {
                        name: "Java",
                        link: "/programming/back-end/java"
                    },
                    {
                        name: "Spring",
                        link: "/programming/back-end/spring"
                    },
                ]
            },
        ]
    },
    {
        name: "Travel",
        link: "/travel"
    },
    {
        name: "Life",
        link: "/life",
        items: [
            {
                name: "Cooking",
                link: "/life/cooking",
                items: [
                    {
                        name: "Food",
                        link: "/life/cooking/food"
                    },
                    {
                        name: "Drink",
                        link: "/life/cooking/drink",
                        items: [
                            {
                                name: "Alcohol",
                                link: "/life/cooking/drink/alcohol"
                            },
                            {
                                name: "Juice",
                                link: "/life/cooking/drink/juice"
                            },
                        ]
                    },
                ]
            },
            {
                name: "Tips",
                link: "/life/tips"
            },
            {
                name: "Funny",
                link: "/life/funny"
            }
        ]
    },
    {
        name: "About",
        link: "/about",
        items: [
            {
                name: "Stories",
                link: "/about/stories",
            }
        ]
    }
];