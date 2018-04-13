<template>
    <div class="amap-page-container">
      <el-amap-search-box class="search-box" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap
        vid="amapDemo"
        :plugin='plugin'
        :center="center"
        :zoom="zoom"
        class="amap-demo"
        :events="events">
        <el-amap-marker :position="center"></el-amap-marker>
        <el-amap-marker v-for="marker in markers" :key='marker' :position="marker.position" :events='marker.events'></el-amap-marker>
      </el-amap>
      <div class="toolbar">
        position: [{{ lng }}, {{ lat }}] address: {{ address }}
      </div>
    </div>
  </template>

  <style>
    #amapDemo {
      height: 300px;
    }
  </style>

  <script>
    /* eslint-disable */
    module.exports = {
      methods: {
        onSearchResult(pois) {
          console.log(pois)
          pois.forEach(poi => {
            this.markers.push({
              position: [poi.lng, poi.lat],
              events: {
                click: () => {
                  alert('click marker');
                }
              },
            });
          });
        }
      },
      data: function() {
        let vue = this;

        return {
          markers: [],
          plugin: [{
            pName: 'Scale',
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }, {
            pName: 'ToolBar',
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }, {
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    vue.lng = result.position.lng;
                    vue.lat = result.position.lat;
                    vue.center = [vue.lng, vue.lat];
                    vue.$nextTick();
                  }
                });
              }
            }
          }, {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }, {
            pName: 'OverView',
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }],
          zoom: 20,
          center: [121.59996, 31.197646],
          address: '',
          events: {
            click(e) {
              let { lng, lat } = e.lnglat;
              vue.lng = lng;
              vue.lat = lat;

              // 这里通过高德 SDK 完成。
              var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
              });
              geocoder.getAddress([lng ,lat], function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  if (result && result.regeocode) {
                    vue.address = result.regeocode.formattedAddress;
                    vue.center = [lng, lat]
                    vue.$nextTick();
                  }
                }
              });
            }
          },
          lng: 0,
          lat: 0
        };
      }
    };
    /* eslint-disable */
</script>