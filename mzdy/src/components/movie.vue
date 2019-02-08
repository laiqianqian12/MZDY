<template>
    <div id="mz_movie">
        <ul>
            <li v-for='item in ms' @tap="ShowDetail(item.id)">
                <img :src="item.img">
                <div class="info">
                    <div class="title">
                        <p>{{item.t}}</p>
                        <p>类型：{{item.movieType}}</p>
                    </div>
                    <div class="score">{{item.r}}</div>
                </div>
            </li>
        </ul>
        <!-- <button @touchstart='getMore' id="geibutton">加载更多...</button> -->
    </div>
</template>

<script>
    // import '@/assets/js/iscroll.js'
    import '@/assets/js/jquery-3.3.1'
    // import Vue from 'vue'
    import IScroll from 'iscroll'
    // Vue.use(IScroll)
    import * as zepto from '@/assets/lib/zepto.js'
    import axios from 'axios'
    export default {
        name: 'movie',

        data() {
            return {
                ms: [],
                page: 1
            }
        },
        mounted() {
            axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290', {
                params: {
                    page: this.page,
                    count: 5
                }
            }).then((res) => {
                var status = res.status;
                if (status == 200) {
                    console.log(res)
                    this.ms = res.data.ms
                }
            });
            this.$nextTick(() => {
                var myScroll = new IScroll('#mz_movie')
            })

        },
        methods: {
            ShowDetail(id) {
                console.log(id)
                this.$router.push('/detail/' + id)
            },
            getMore(ev) {
                this.page++;
                axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290', {
                    params: {
                        page: this.page,
                        count: 5
                    }
                }).then((res) => {
                    var status = res.status;
                    if (status == 200) {
                        console.log(res)
                        if (res.data.ms.length == 0) {
                            ev.target.style.display = 'none'
                        } else {
                            this.ms = this.ms.concat(res.data.ms)// 连接数组
                        }

                    }
                })

            }
        }
    }
</script>

<style scoped>
    #mz_movie {
        margin-top: 18px;
        height: 580px;
        /* overflow: hidden; */
    }

    #mz_movie ul {
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }

    #mz_movie li {
        margin-bottom: 10px;
    }

    #mz_movie img {
        width: 100%;
    }

    #mz_movie .info {
        height: 50px;
        background: white;
        display: flex;
    }

    #mz_movie .title {
        flex: 1;
        padding-left: 10px;
        padding-top: 5px;
    }

    #mz_movie .title p {
        line-height: 20px;
    }

    #mz_movie .score {
        width: 50px;
        line-height: 50px;
        text-align: center;
        color: #f79177;
        font-size: 20px;
    }

    #geibutton {
        width: 100%;
        height: 30px;
        margin: 0 auto;
        padding-bottom: 20px;
    }
</style>