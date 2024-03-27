export type ChannelItem = {id:number, name:string}
export type ChannelRes = {
  data: {
    channels: ChannelItem[]
  }
}
export type ArticleItem = {id:number}
export type ArticleRes = {
  data: {
    articles: ArticleItem[]
  }
}