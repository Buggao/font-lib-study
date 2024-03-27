import { defineStore } from 'pinia';
import axios from 'axios'
import { ChannelItem, ChannelRes} from '../../types/store'


export default defineStore('channels', {
  state: () => ({
    channelList: [] as ChannelItem[],
    active: 0 as number
  }),
  actions: {
    async getChannel(){
      const res = await axios.get<ChannelRes>('http://geek.itheima.net/v1_0/channels')
      this.channelList = res.data.data.channels
    },
    addChannel(channel: string) {
      this.channelList.push(channel);
    },
    removeChannel(channel: string) {
      this.channelList = this.channels.filter((c) => c !== channel);
    },
    setActive(index: number){
      this.active = index
    }
  },
})