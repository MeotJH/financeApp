const menu = [
    {
        path: '/',
        name: 'Home',
        nameKor:'메인페이지',
        component:()=> import('../views/Home.vue')
    },
    {
        path:'/about',
        name:'About',
        nameKor:'about페이지',
        component:()=> import('../views/About.vue')
    }
]

export default menu