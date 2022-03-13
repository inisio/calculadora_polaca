const app = new Vue({
    el: '#app',
    data: {//los datois son datos como tales
        lol: 'hola mundo',
        pila: [//cramos una lista para segmantezar una pila
            '1',
        ],
        nuevo_dato: '',
        extractor: null,
    },
    methods:{
        agregar(){
            if(this.nuevo_dato!=''){
                this.pila.push(this.nuevo_dato)
                this.nuevo_dato = ''
            }
        },
        sumar(){
            if(this.nuevo_dato!=''){
                this.pila.push(this.nuevo_dato)
                this.nuevo_dato = ''
            }
            if(this.pila.length!=1 || this.nuevo_dato != ''){   
            this.extractor = parseInt(this.pila.pop(), 0)
            this.extractor = this.extractor + parseInt(this.pila.pop(), 0)
            this.pila.push(this.extractor)
            this.nuevo_dato = ''
            }
        },
        restar(){ 
            if(this.nuevo_dato!=''){
                this.pila.push(this.nuevo_dato)
                this.nuevo_dato = ''
            }
            if(this.pila.length!=1 || this.nuevo_dato != ''){   
            this.extractor = parseInt(this.pila.pop(), 0) 
            this.extractor = this.extractor - parseInt(this.pila.pop(), 0)
            this.pila.push(this.extractor)
            this.nuevo_dato = ''
            }
        },
        multiplicar(){ 
            if(this.nuevo_dato!=''){
                this.pila.push(this.nuevo_dato)
                this.nuevo_dato = ''
            }
            if(this.pila.length!=1 || this.nuevo_dato != ''){   
            this.extractor = parseInt(this.pila.pop(), 0) 
            this.extractor = this.extractor * parseInt(this.pila.pop(), 0)
            this.pila.push(this.extractor)
            this.nuevo_dato = ''
            }
        },
        dividir(){
            if(this.nuevo_dato != ''){
                this.pila.push(this.nuevo_dato)
                this.nuevo_dato = ''
            }
            if(this.pila.length!=1 || this.nuevo_dato != ''){   
                this.extractor = parseInt(this.pila.pop(), 0)
                this.extractor = this.extractor / parseInt(this.pila.pop(), 0)
                this.pila.push(this.extractor)
                this.nuevo_dato = ''
            }
        },
        eliminar(){
            this.nuevo_dato = this.nuevo_dato.substring(0, this.nuevo_dato.length-1)
        },
        borrar(){
            this.nuevo_dato = ""
        },
        punto(){
            if(this.nuevo_dato!=''){
                this.nuevo_dato = this.nuevo_dato + "."
            }
        },
        uno(){
            this.nuevo_dato = this.nuevo_dato + "1"
        },
        dos(){
            this.nuevo_dato = this.nuevo_dato + "2"
        },
        tres(){
            this.nuevo_dato = this.nuevo_dato + "3"
        },
        cuatro(){
            this.nuevo_dato = this.nuevo_dato + "4"
        },
        cinco(){
            this.nuevo_dato = this.nuevo_dato + "5"
        },
        seis(){
            this.nuevo_dato = this.nuevo_dato + "6"
        },
        siete(){
            this.nuevo_dato = this.nuevo_dato + "7"
        },
        ocho(){
            this.nuevo_dato = this.nuevo_dato + "8"
        },
        nueve(){
            this.nuevo_dato = this.nuevo_dato + "9"
        },
        cero(){
            this.nuevo_dato = this.nuevo_dato + "0"
        }
    }
})