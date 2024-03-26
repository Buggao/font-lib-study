import { defineStore } from 'pinia';

export default defineStore('channels', {
  state: () => ({
    channels: ['css','html'] as string[],
  }),
  actions: {
    addChannel(channel: string) {
      this.channels.push(channel);
    },
    removeChannel(channel: string) {
      this.channels = this.channels.filter((c) => c !== channel);
    },
  },
})