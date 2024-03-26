import useChaneelsStore from './modules/channels'

export default function(){
    return {
        channels: useChaneelsStore()
    }
}