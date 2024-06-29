let styles = [
    {
        color: "dark-purple",
        css: `bg-dark-purple 
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-light-purple
        [&_a]:bg-light-cyan [&_a]:text-dark-purple
        `
    },
    {
        color: "light-purple",
        css: `bg-light-purple
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-dark-purple
        [&_a]:bg-dark-purple [&_a]:text-white
        `
    },
    {
        color: "blue",
        css: `bg-blue
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-black
        [&_a]:bg-orange [&_a]:text-black
        `
    },
    {
        color: "white",
        css: `bg-white
        [&_h1]:text-dark-purple [&_h2]:text-dark-purple [&_h3]:text-dark-purple [&_h4]:text-dark-purple 
        [&_p]:text-black
        [&_a]:bg-light-purple [&_a]:text-white
        `
    },
    {
        color: "black",
        css: `bg-black
        [&_h1]:text-light-purple [&_h2]:text-light-purple [&_h3]:text-light-purple [&_h4]:text-light-purple 
        [&_p]:text-white
        [&_a]:bg-light-cyan [&_a]:text-black
        `
    }, 
    {
        color: "red",
        css: `bg-red
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-black
        [&_a]:bg-light-cyan [&_a]:text-black
        `
    },
    {
        color: "cyan",
        css: `bg-light-cyan
        [&_h1]:text-dark-purple [&_h2]:text-dark-purple [&_h3]:text-dark-purple [&_h4]:text-dark-purple 
        [&_p]:text-black
        [&_a]:bg-light-purple [&_a]:text-black
        `
    },
    {
        color: "orange",
        css: `bg-orange
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-black
        [&_a]:bg-black [&_a]:text-white
        `
    }
]

export function getStyle(style: string){
    let css
    styles.map((styleObj) => {
        if(styleObj.color === style){
            return css = styleObj.css
        }
    })
    return css
}