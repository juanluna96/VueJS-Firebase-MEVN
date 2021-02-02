app.component('footer-banco', {
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
        <h3 class="text-white">{{ texto }} - {{ cantidad }}</h3>
    </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web',
            cantidad: 1000
        }
    }
})