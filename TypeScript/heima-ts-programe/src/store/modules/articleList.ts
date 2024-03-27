import { defineStore } from 'pinia';
import axios from 'axios'
import { ArticleItem, ArticleRes} from './../../types/store'
export default defineStore('articleList', {
    state: () => ({
        articleList: [] as ArticleItem[]
    }),
    actions: {
        async getArticleList(id:number) {
            let tiemStamp = Date.now()
            const res = await axios.get<ArticleRes>(
                `http://geek.itheima.net/v1_0/article?channel_id=${id}&tiemstamp=${tiemStamp}`)
            this.articleList = res
            console.log('article res is',res)
        }
    }
  }
)
