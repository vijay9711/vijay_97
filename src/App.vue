<template>
  <div id="large-header" class="large-header">
    <canvas id="demo-canvas"></canvas>
    <div class="dark:bg-gray-dark bg-white z-50">
      <MainPageVue
        :currentTheme="darkMode"
        @onThemeChange="onThemeChange($event)"
      />
    </div>
    <div class="xs:-z-10 xs:absolute md:relative md:z-0 h-screen w-screen">
      <router-view></router-view>
      <!-- <router-view v-slot="{ Component, route }">
        <transition
          :leave-active-class="route.meta.leaveClass"
          :enter-active-class="route.meta.enterClass"
        >
          <component :is="Component"></component>
        </transition>
      </router-view> -->
    </div>
  </div>
</template>

<script>
import MainPageVue from "./view/MainPage.vue";
import { TweenLite, Circ } from "gsap";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
export default {
  name: "App",
  components:{
    MainPageVue
  },
  data() {
    return {
      width: 0,
      height: 0,
      largeHeader: null,
      canvas: null,
      ctx: null,
      points: [],
      target: { x: 0, y: 0 },
      animateHeader: true,
      darkMode: isDark.value,
    };
  },
  mounted() {
    this.initHeader();
    this.initAnimation();
    this.addListeners();
  },
  methods: {
    onThemeChange() {
      toggleDark();
    },
    initHeader() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.target = { x: this.width / 2, y: this.height / 2 };

      this.largeHeader = document.getElementById("large-header");
      this.largeHeader.style.height = this.height + "px";

      this.canvas = document.getElementById("demo-canvas");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext("2d");

      // Create points
      this.points = [];
      for (let x = 0; x < this.width; x += this.width / 20) {
        for (let y = 0; y < this.height; y += this.height / 20) {
          let px = x + Math.random() * this.width / 20;
          let py = y + Math.random() * this.height / 20;
          let point = { x: px, originX: px, y: py, originY: py, closest: [], active: 0 };
          this.points.push(point);
        }
      }

      // Find 5 closest points for each point
      for (let i = 0; i < this.points.length; i++) {
        let p1 = this.points[i];
        let closest = [];
        for (let j = 0; j < this.points.length; j++) {
          let p2 = this.points[j];
          if (p1 !== p2) {
            closest.push(p2);
            if (closest.length > 5) {
              closest.sort((a, b) => this.getDistance(p1, a) - this.getDistance(p1, b));
              closest.pop();
            }
          }
        }
        p1.closest = closest;
      }

      // Assign a circle to each point
      this.points.forEach((point) => {
        point.circle = this.createCircle(point, 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
      });
    },

    // Circle constructor
    createCircle(pos, rad, color) {
      return {
        pos: pos,
        radius: rad,
        color: color,
        active: 0,
        draw: () => {
          if (this.ctx && this.ctx.beginPath) {
            this.ctx.beginPath();
            this.ctx.arc(pos.x, pos.y, rad, 0, 2 * Math.PI, false);
            // console.log("theme status ", isDark.value);
            if(isDark.value){
              // this.ctx.fillStyle="white";
              this.ctx.fillStyle = 'rgb(255 255 255 / 70%)';
            }else{
              // this.ctx.fillStyle="black";
              this.ctx.fillStyle = 'rgb(0 0 0 / 100%)';
            }
            // this.ctx.fillStyle = 'rgb(255 255 255 / 50%)';
            this.ctx.fill();
          }
        },
      };
    },

    addListeners() {
      window.addEventListener("mousemove", this.mouseMove);
      window.addEventListener("scroll", this.scrollCheck);
      window.addEventListener("resize", this.resize);
    },

    mouseMove(e) {
      let posx = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      let posy = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      this.target.x = posx;
      this.target.y = posy;
    },

    scrollCheck() {
      this.animateHeader = document.body.scrollTop <= this.height;
    },

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.largeHeader.style.height = this.height + "px";
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    },

    initAnimation() {
      if (window.innerWidth > 768) {
      this.animate();
      }
      this.points.forEach((point) => this.shiftPoint(point));
    },

    animate() {
      if (this.animateHeader) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.points.forEach((point) => {
          let dist = this.getDistance(this.target, point);

          // Make the dots and lines visible only if the cursor is within a certain distance
          if (dist < 4000) {
            point.active = 0.3;
            point.circle.active = 0.6;
          } else if (dist < 20000) {
            point.active = 0.1;
            point.circle.active = 0.3;
          } else {
            point.active = 0;
            point.circle.active = 0;
          }
          // Draw lines only if the cursor is within a certain range
          if (dist < 20000 && window.innerWidth > 768) {
            this.drawLines(point);
            point.circle.draw();
          }

          
        });
      }
      requestAnimationFrame(this.animate);
    },

    shiftPoint(p) {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => {
          this.shiftPoint(p);
        },
      });
    },

    drawLines(p) {
      if (!p.active) return;
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      p.closest.forEach((closePoint) => {
        this.ctx.lineTo(closePoint.x, closePoint.y);
      });
      this.ctx.strokeStyle = `rgba(0,217,249,${p.active})`;
      this.ctx.stroke();
    },

    getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    },
  },
};
</script>

<style>

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
::-webkit-scrollbar-track-piece {
  background: transparent;
}
::-webkit-scrollbar {
  background-color: transparent !important;
  height: 5px;
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #41546b60;
  width: 5px;
  height: 5px;
  border-radius: 50px;
  transition-duration: 3s;
}
:hover::-webkit-scrollbar-thumb {
  background-color: #41546b90;
  border-radius: 50px;
}
::-webkit-scrollbar-track {
  background-clip: content-box;
}
.large-header {
  position: relative;
  width: 100%;
  /* background: #333; */
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  @apply dark:bg-gray-dark bg-white;
}
#demo-canvas{
  z-index: -20;
  position: absolute;
}
</style>
