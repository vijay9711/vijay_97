<template>
  <div class="flip-card" @click="flipCard">
    <div class="flip-card-inner" :class="{ flipped: isFlipped }" ref="card">
      <div class="flip-card-front">
        <h2>Front Side</h2>
      </div>
      <div class="flip-card-back">
        <h2>Back Side</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "FlipCard",
  // props: [data],
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
      const tl = gsap.timeline();

      if (this.isFlipped) {
        tl.to(this.$refs.card, {
          duration: 0.6,
          rotationY: 180,
          ease: "power2.inOut"
        });
      } else {
        tl.to(this.$refs.card, {
          duration: 0.6,
          rotationY: 0,
          ease: "power2.inOut"
        });
      }
    }
  }
};
</script>

<style scoped>
.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 24px;
  color: #fff;
}

.flip-card-front {
  background-color: #2980b9;
}

.flip-card-back {
  background-color: #27ae60;
  transform: rotateY(180deg);
}
</style>
