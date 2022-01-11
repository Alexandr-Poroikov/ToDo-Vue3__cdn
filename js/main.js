const App = {
    data(){
        return {
            inputValue:'',
            needDoList: [],
            completeList:[],
        }
    },
    methods: {
        addList(){
            if(this.inputValue.length){
                this.needDoList.push({
                    title : this.inputValue,
                    id: this.needDoList.length+1,
                    checked: false
                });
                this.inputValue = '';
            }
        },
        removeMask(ind){
            this.needDoList.splice(ind,1);
        },
        doCheck(mask){
            if(mask.checked == true){
                this.completeList.push(mask)
                this.needDoList=this.needDoList.filter(item=>item.id !=mask.id)
            }
        },
        completeCheck(mask){
            if(mask.checked === false){
                this.needDoList.push(mask)
                this.completeList = this.completeList.filter(item=> mask.id != item.id)
            }
        },
        deleteCompleteCheck(mask){
            this.completeList = this.completeList.filter(item=> mask.id != item.id)
        }

    },
}

Vue.createApp(App).mount('#app')


