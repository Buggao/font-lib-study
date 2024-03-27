import useChaneelsStore from './modules/channels'
import usearticleList from './modules/articleList'

export default function(){
    return {
        channels: useChaneelsStore(),
        articleList: usearticleList()
    }
}