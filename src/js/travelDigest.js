export default {
    data() {
        return {
            flInfo: Object,
            flParams1: Object,
            flParams2: Object
        };
    },
    props: {
        params: Object
    },
    watch: {
        params() {
            this.flParams1.chooseprice = this.params.flParams1.chooseprice;
        }
    },
    computed: {
        totalprice() {
            if (this.flInfo.ticket == 1) {
                return this.flParams1.chooseprice * this.flInfo.passnum;
            } else {
                return (
                    (Number(this.flParams1.chooseprice) +
                        Number(this.flParams2.chooseprice)) *
                    this.flInfo.passnum
                );
            }
        },
        totalday() {
            if (this.ticket == 1) {
                return 1;
            } else {
                var date1 = new Date(this.flInfo.startdate).getTime();
                var date2 = new Date(this.flInfo.backdate).getTime();
                var len = date2 - date1;
                len = Math.floor(len / (24 * 60 * 60 * 1000));
                return len;
            }
        }
    },
    created() {
        // console.log(this.params);
        this.flInfo = this.params.flInfo;
        this.flParams1 = this.params.flParams1;
        this.flParams2 = this.params.flParams2;
    }
};