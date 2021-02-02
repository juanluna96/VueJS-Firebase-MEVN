const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi banco con Vue.js v3',
            cantidad: 1500,
            enlaceYoutube: 'https://youtube.com/',
            estado: true,
            servicios: ['transferencia', 'pagos', 'giros', 'cheques']
        }
    },
    methods: {
        AumentarCantidad() {
            this.cantidad = this.cantidad + 100;
        }
    }
});