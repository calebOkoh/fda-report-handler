<template>
  <div>
    <NavigationBar />
  </div>
  <div class="chart-container">
    <Bar class="chart" :data="data" :options="options" />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "../assets/chartConfig";
import NavigationBar from "./NavigationBar.vue";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "ObserveStats",
  components: {
    Bar,
  },
  data() {
    return chartConfig;
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full screen height */
}

.chart {
  flex: 1; /* Take equal space for each chart */
  padding: 10px;
}
</style>
