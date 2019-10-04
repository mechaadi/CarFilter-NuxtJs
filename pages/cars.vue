<template>
  <section class="section">
    <v-row no-gutters>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="http://cdn.24.co.za/files/Cms/General/d/8374/4e773803ffb1420695cd24ee35f8a755.jpg"
        >
          <v-card-title class="align-end fill-height"
            >Available in {{ location }}</v-card-title
          >
        </v-img>

        <v-card-text>
          <span class="heading">{{ title.slice(0, 15) }}...</span>
          <span>{{ title.slice(0, 30) }}</span
          ><br />
          <span class="text--primary">
            <v-chip class="ma-1">
              <b>{{ gearbox }}</b>
            </v-chip>
            <v-chip class="ma-1" color="primary">
              <b>{{ fuel }}</b>
            </v-chip>
            <v-chip class="ma-1">
              <b>{{ hp }}hp</b>
            </v-chip>
            <v-chip class="ma-1">
              <b>{{ color }}</b>
            </v-chip>
            <br /><br />
            <span>BUY FOR</span>
            <p class="price">€ {{ price }}/-</p>
          </span>
          <br />
          <span>or xyz per month</span>
        </v-card-text>

        <v-card-actions>
          <v-btn class="primary" text color="white">
            VIEW THIS CAR
          </v-btn>
          <v-btn text color="orange">
            MARK FAVOURITE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'Cars',
  components: {
    Card
  },

  props: {
    title: {
      default: 'default',
      type: String
    },
    location: {
      default: 'default',
      type: String
    },
    price: {
      default: 0,
      type: Number
    },
    fuel: {
      default: 'default',
      type: String
    },
    gearbox: {
      default: 'default',
      type: String
    },
    hp: {
      default: 0,
      type: Number
    },
    color: {
      default: 'default',
      type: String
    }
  },

  data() {
    return {
      cars: []
    }
  },
  created() {}
}
</script>

<style scoped>
.cars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.spacer {
  margin-top: 20px;
}

.car:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.pincolor {
  color: white;
}

.car {
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  background: #e91e63;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.like {
  color: grey;
}

.heading {
  font-size: 28px;
  color: black;
}

.price {
  font-size: 32px;
  color: black;
}

.prop {
  color: black;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.viewbtn {
  background-color: blue;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: rgb(238, 226, 226);
}

.location {
  margin-top: 140px;
  color: white;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
