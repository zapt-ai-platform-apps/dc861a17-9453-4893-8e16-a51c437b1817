export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'morocco-primary': '#C16E17', // rich amber
                'morocco-secondary': '#E48620', // medium amber
                'morocco-light': '#F2D0A4', // light amber
                'morocco-dark': '#8C4D11', // dark amber
                'morocco-accent': '#17589E', // deep blue (complementary to amber)
                'morocco-black': '#1A1A1A',
                'morocco-white': '#F9F6F0',
            },
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'body': ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'morocco-pattern': "url('https://images.unsplash.com/photo-1562266351-b472d6494ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxNb3JvY2NhbiUyMHBhdHRlcm58ZW58MHx8fHwxNzQyNjExNTc5fDA&ixlib=rb-4.0.3&q=80&w=1080')",
            },
        },
    },
    plugins: [],
};