<template>
  <div class="dashjs-player"></div>
</template>

<script>
import config from '@/config';
import dashjs from 'dashjs';

export default {
  name: 'DashjsPlayer',
  props: ['video'],
  data() {
    return {
      player: null,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.log('[DashjsPlayer] - init');

      this.player = dashjs.MediaPlayer().create();
      this.setProtection();
      this.log('[DashjsPlayer] - version:', this.player.getVersion());
    },
    configure() {},
    setProtection() {
      const protectionController = this.player.getProtectionController();
      const protData = {
        'com.widevine.alpha': {
          serverURL: config.licenseServers['com.widevine.alpha'],
        },
        'com.microsoft.playready': {
          serverURL: config.licenseServers['com.microsoft.playready'],
        },
      };
      protectionController.setProtectionData(protData);
    },
    load(url) {
      this.player.initialize(this.video, url, true);
      this.setPlayerEvents();
      this.setMetricInterval();
    },
    setPlayerEvents() {
      this.video.addEventListener('loadeddata', this.onLoadedData);
      this.player.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED, this.onAdaptationEvent);
    },
    setMetricInterval() {
      setInterval(() => {
        this.updateMetrics();
      }, 1000);
    },
    selectTrack(id) {
      this.log('[DashjsPlayer] - selectTrack', id);
      this.player.setQualityFor('video', id);
    },
    getTracks() {
      this.log('[DashjsPlayer] - getTracks');

      const tracks = this.player.getBitrateInfoListFor('video');
      const activeTrack = this.player.getQualityFor('video');

      let newTracks = [];
      tracks.forEach((o) => {
        const t = {
          id: o.qualityIndex,
          name: o.bitrate,
          active: o.qualityIndex === activeTrack,
        };
        newTracks.push(t);
      });

      // // Sort by name;
      newTracks = newTracks.sort((a, b) => (
        a.name - b.name
      ));
      this.$emit('tracks', newTracks);
    },
    enableAdaptation(enabled) {
      this.log('[DashjsPlayer] - enableAdaptation', enabled);
      this.player.setAutoSwitchQualityFor('video', enabled);
    },
    updateMetrics() {
      const metrics = this.player.getMetricsFor('video');
      const dashmetrics = this.player.getDashMetrics();

      // Get active track ID.
      const activeTrack = this.player.getQualityFor('video');

      // Current buffer stats.
      const bufferlevel = dashmetrics.getCurrentBufferLevel(metrics);

      // Current track Stats.
      const { bitrateList } = this.player.getCurrentTrackFor('video');
      const { width, height, bandwidth } = bitrateList[activeTrack];

      const data = {
        buffer: bufferlevel,
        width,
        height,
        bitrate: bandwidth,
      };

      const output = `+ ${data.buffer.toFixed(0)}s`;
      this.$emit('buffer', output);
      this.$emit('stats', data);
    },
    onAdaptationEvent(event) {
      this.log('[DashjsPlayer:onAdaptationEvent]', JSON.stringify(event));
      this.getTracks();
      // this.$emit('adaptation');
    },
    onLoadedData(event) {
      this.log('[DashjsPlayer] - onLoadedData', JSON.stringify(event));
      this.getTracks();
    },
    onDownloadBitrate(event) {
      this.log('[DashjsPlayer:onDownloadBitrate]', JSON.stringify(event));

      // const data = {
      //   width: event.detail.width,
      //   height: event.detail.height,
      //   bitrate: event.detail.bitrate,
      // };
      // this.$emit('stats', data);
    },
    log(...message) {
      this.$emit('log', ...message);
    },
  },
};
</script>

<style scoped>
video {
  background: #aaa;
  height: 100%;
  width: 100%;
}
</style>