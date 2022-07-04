Vue.createApp({
    data: () => ({
        newElem: '',
        listNewElem: [],
        listElem: [],
    }),
    methods: {
        addNewElems() {
            
            if (this.newElem !== '') {
                this.listNewElem = this.newElem.split(';')
                this.listElem.push(...this.listNewElem)
                this.newElem = ''
            }
        },
    }
}).mount('#app')