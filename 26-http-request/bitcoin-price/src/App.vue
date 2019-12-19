<template>
    <div id="app">
        <h1>Bitcoin Price Index</h1>

        <section v-if="errored" class="error">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">Loading...</div>

            <div v-else v-for="currency in info" class="currency" :key="currency.code">
                {{ currency.description }}:
                <span class="lighten">
                    <span v-html="currency.symbol"></span>
                    {{ currency.rate_float | currencydecimal }}
                </span>
            </div>
        </section>

        <div class="pull-right mt-50px">
            <button @click="refresh">Refresh</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

const client = axios.create({
    baseURL: "https://api.coindesk.com/v1/"
});


export default {
    name: "app",
    data() {
        return {
            info: null,
            loading: true,
            errored: false
        };
    },
    filters: {
        currencydecimal(value) {
            return value.toFixed(2);
        }
    },
    methods: {
        refresh() {
            this.loading = true;
            client
                .get("/bpi/currentprice.json")
                .then(response => {
                    this.info = response.data.bpi;
                    this.errored = false;
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => (this.loading = false));
        }
    },
    mounted() {
        this.refresh();
    }
};
</script>

<style scoped>
#app {
    margin-top: 20px;
    width: 300px;
    padding: 0 40px 40px;
    background: #2f242c;
    border-radius: 5px;
    color: #b3bfb8;
}

.error {
  color: salmon;
}

h1 {
    color: #f0f7f4;
}

.lighten {
    color: white;
}

.mt-50px {
    margin-top: 50px;
}

.pull-right {
    float: right;
}
</style>
