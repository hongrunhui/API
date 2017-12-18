<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li class="pm2-li" v-for="(item, index) in pm2.siteList">
                <span v-for="(li, i) in item">{{li}}</span>
            </li>
        </ul>
        <ul>
            <li class="pm2-li" v-for="(item, index) in history.list">
                <img v-bind:src="item.img"/>
                <span v-for="(li, i) in item">{{li}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        this.getHistory();
        return {
            pm2: {},
            history: {},            
            msg: 'Hello!'
        }
    },
    methods: {
        getPm2() {
            let self = this;
            var data = {
                city: '北京',
            };
            $.post('http://127.0.0.1:9999/api/pm2', data, function(res) {
                console.log(JSON.parse(res));
                self.pm2 = JSON.parse(res).showapi_res_body;
                console.log(self);
            });
        },
        getHistory() {
            let self = this;
            var data = {
                date: '0918',
            };
            $.post('http://127.0.0.1:9999/api/history', data, function(res) {
                console.log(JSON.parse(res));
                self.history = JSON.parse(res).showapi_res_body;
                console.log(self);
            });
        }
    }

}
</script>

<style scoped>
#example {
    height: 100vh;
}
.pm2-li span{
    display: inline-block;
    padding: 5px;
    margin: 5px;
    border-radius: 100px;
    border: 10px solid rgba(99, 194, 87, .4);
}
</style>