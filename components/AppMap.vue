<template>
  <div class="map-wrap">
    <div id="map" class="map" />
    <div class="license">
      &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import mapMarkerIcon from '~/assets/images/icons/map-marker.svg'

const props = defineProps<{
  center: number[]
}>()

onMounted(async () => {
    const L = (await import('leaflet')).default;
    await import('leaflet/dist/leaflet.css');

    const center = props.center;

    // Inicializace mapy
    const map = L.map('map', {
      center: center,
      zoom: 14,
      zoomControl: false,
      attributionControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.icon({
    iconUrl: mapMarkerIcon, 
    iconSize: [38, 38], 
    iconAnchor: [19, 36],
  })

    L.marker(center, { icon: customIcon }).addTo(map);
})
</script>

<style lang="scss">
@use '~/assets/scss/variables' as var;

.map-wrap {
  position: relative;
}

.map {
  filter: grayscale(100) brightness(105%);
  transition: filter var.$transitionTime;
  height: 390px;
  background: var.$gray-light;

  &:hover {
    filter: grayscale(0) brightness(100%);
  }

  img {
    max-width: none;
  }
}

.license  {
  position: absolute;
  right: 4px;
  bottom: 0;
  font-size: 10px;
  color: var.$black;
  text-shadow: var.$white -1px -1px 0, var.$white 1px -1px 0, var.$white -1px 1px 0, var.$white 1px 1px 0, var.$white -1px 0 0, var.$white 1px 0 0, var.$white 0 1px 0, var.$white 0 -1px 0;
}
</style>
