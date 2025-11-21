class Renderer{
    constructor(){
        this.oldVNode = null;
        this.domPage = null;
        this.container = null;
    }

    mount(domPage, container){
        this.domPage = domPage;
        this.container = container;
        this.render();
    }

    render() {
        this.container.innerHTML = "";
        this.container.appendChild(this.domPage());
        console.log("h");
    }

}

export const renderer = new Renderer();
export const mount = renderer.mount.bind(renderer);
export const render = renderer.render.bind(renderer);