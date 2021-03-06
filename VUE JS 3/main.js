const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi banco con Vue.js v3',
            cantidad: 1500,
            enlaceYoutube: 'https://youtube.com/',
            estado: true,
            servicios: ['transferencia', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        AumentarCantidad() {
            this.cantidad = this.cantidad + 100;
        },
        DisminuirCantidad(valor) {
            if (this.cantidad == 0) {
                this.desactivar = true;
                alert('Saldo en 0');
                return
            }
            this.cantidad = this.cantidad - valor;
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger';
        },
        mayusculasTexto() {
            return this.titulo.toUpperCase()
        }
    }
});