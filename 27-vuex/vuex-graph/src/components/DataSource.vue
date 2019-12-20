<script>
export default {
    created() {
        const timer = setInterval(
            () =>
                this.$store.dispatch("record", {
                    num: Math.floor(Math.random() * 100)
                }),
            3000
        );
        this.$once("hook:beforeDestroy", () => clearInterval(timer));
    },

    render() {
        return null;
    }
};
</script>
