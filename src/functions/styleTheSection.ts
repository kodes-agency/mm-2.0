let styles = [
    {
        color: "dark-purple",
        css: `bg-dark-purple
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-light-purple
        [&_a]:bg-light-cyan [&_a]:text-dark-purple
        [&_button]:bg-light-cyan [&_button]:text-dark-purple
        [&_a:hover]:bg-light-purple [&_a:hover]:text-dark-purple [&_a:hover]:ring-2 [&_a:hover]:ring-light-cyan
        [&_button:hover]:bg-light-purple [&_button:hover]:text-dark-purple [&_button:hover]:ring-2 [&_button:hover]:ring-light-cyan
        `
    },
    {
        color: "light-purple",
        css: `bg-light-purple
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-dark-purple
        [&_a]:bg-dark-purple [&_a]:text-white
        [&_button]:bg-dark-purple [&_button]:text-white
        `
    },
    {
        color: "blue",
        css: `bg-blue
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-white
        [&_a]:bg-orange [&_a]:text-black
        [&_button]:bg-orange [&_button]:text-black
        [&_a:hover]:bg-red [&_a:hover]:text-black [&_a:hover]:ring-2 [&_a:hover]:ring-white
        [&_button:hover]:bg-red [&_button:hover]:text-black [&_button:hover]:ring-2 [&_button:hover]:ring-white
        `
    },
    {
        color: "white",
        css: `bg-white
        [&_h1]:text-dark-purple [&_h2]:text-dark-purple [&_h3]:text-dark-purple [&_h4]:text-dark-purple 
        [&_p]:text-black
        [&_a]:bg-light-purple [&_a]:text-white
        [&_button]:bg-light-purple [&_button]:text-white
        [&_a:hover]:bg-dark-purple [&_a:hover]:text-light-purple [&_a:hover]:ring-2 [&_a:hover]:ring-light-purple
        [&_button:hover]:bg-dark-purple [&_button:hover]:text-light-purple [&_button:hover]:ring-2 [&_button:hover]:ring-light-purple
        `
    },
    {
        color: "black",
        css: `bg-black
        [&_h1]:text-light-purple [&_h2]:text-light-purple [&_h3]:text-light-purple [&_h4]:text-light-purple 
        [&_p]:text-white
        [&_a]:bg-light-cyan [&_a]:text-black
        [&_button]:bg-light-cyan [&_button]:text-black
        [&_a:hover]:bg-dark-purple [&_a:hover]:text-light-purple [&_a:hover]:ring-2 [&_a:hover]:ring-light-purple
        [&_button:hover]:bg-dark-purple [&_button:hover]:text-light-purple [&_button:hover]:ring-2 [&_button:hover]:ring-light-purple
        `
    }, 
    {
        color: "red",
        css: `bg-red
        [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white 
        [&_p]:text-white
        [&_a]:bg-light-cyan [&_a]:text-black
        [&_button]:bg-light-cyan [&_button]:text-black
        [&_a:hover]:bg-black [&_a:hover]:text-light-cyan [&_a:hover]:ring-2 [&_a:hover]:ring-light-cyan
        [&_button:hover]:bg-black [&_button:hover]:text-light-cyan [&_button:hover]:ring-2 [&_button:hover]:ring-light-cyan
        `
    },
    {
        color: "cyan",
        css: `bg-light-cyan
        [&_h1]:text-dark-purple [&_h2]:text-dark-purple [&_h3]:text-dark-purple [&_h4]:text-dark-purple 
        [&_p]:text-black
        [&_a]:bg-light-purple [&_a]:text-black
        [&_a:hover]:bg-dark-purple [&_a:hover]:text-light-purple [&_a:hover]:ring-2 [&_a:hover]:ring-light-purple
        [&_button]:bg-light-purple [&_button]:text-black 
        [&_button:hover]:bg-dark-purple [&_button:hover]:text-light-purple [&_button:hover]:ring-2 [&_button:hover]:ring-light-purple
        `
    },
    {
        color: "orange",
        css: `bg-orange
        [&_h1]:text-cyan [&_h2]:text-cyan [&_h3]:text-cyan [&_h4]:text-cyan 
        [&_p]:text-white
        [&_a]:bg-black [&_a]:text-white
        [&_button]:bg-black [&_button]:text-white
        [&_a:hover]:bg-cyan [&_a:hover]:text-white [&_a:hover]:ring-2 [&_a:hover]:ring-black
        [&_button:hover]:bg-cyan [&_button:hover]:text-white [&_button:hover]:ring-2 [&_button:hover]:ring-black
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