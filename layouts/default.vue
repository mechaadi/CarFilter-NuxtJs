<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right color="blue-white" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>AUTOMIX</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Filter
            </v-list-item-title>
            <v-list-item-subtitle>
              Get customized results
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-btn @click="filter">Button</v-btn>
        </v-list-item>

        <v-list-item>
          <v-col cols="12" sm="12" md="12">
            FUEL

            <v-checkbox
              v-model="diesel"
              :label="`Diesel [${dieselCount}]`"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="petrol"
              :label="`Petrol [${petrolCount}]`"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="gpl"
              :label="`LPG [${lpgCount}]`"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="methane"
              :label="`Methane [${methaneCount}]`"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="hybrid"
              :label="`Hybrid [${hybridCount}]`"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="electrical"
              :label="`Electrical [${electricalCount}]`"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-list-item>

        <br />

        <v-list-item>
          <v-col cols="12" sm="12" md="12">
            CONDITION
            <v-checkbox
              v-model="used"
              label="Used"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="neww"
              label="New"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="zero"
              label="Zero"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-list-item>

        <br />

        <v-list-item>
          <v-col cols="12" sm="12" md="12">
            TRANSMISSION
            <v-checkbox
              v-model="manual"
              label="Manual"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="automatic"
              label="Automatic"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-list-item>

        <v-list-item>
          <v-col cols="12" sm="12" md="12">
            BODY
            <v-checkbox
              v-model="convertible"
              label="Convertible"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="coupe"
              label="Coupe"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="city_ca"
              label="City CA"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="sedan"
              label="Sedan"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="suv"
              label="SUV"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="pickup"
              label="Pickup"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="mpv"
              label="MPV"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="sports"
              label="Sports"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="station_wagon"
              label="Station wagon"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-list-item>

        <v-list-item>
          <v-col cols="12" sm="12">
            <v-text-field
              id="gear"
              v-model="gear"
              label="gearbox"
              single-line
              outlined
            ></v-text-field>
          </v-col>
        </v-list-item>

        <v-list-item>
          <v-btn @click="filter">Button</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <v-row no-gutters>
            <v-col
              v-for="(i, car) in cars"
              :key="car.id"
              cols="12"
              xs="8"
              md="3"
              sm="8"
            >
              <cars
                :title="cars[car].title"
                :price="cars[car].price"
                :location="cars[car].location"
                :fuel="cars[car].fuel_name"
                :gearbox="cars[car].gearbox_name"
                :hp="cars[car].power_hp"
                :color="cars[car].external_color_code"
              />
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    ></v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
import cars from '../pages/cars'
export default {
  components: {
    cars
  },

  data: () => ({
    dieselCount: 0,
    petrolCount: 0,
    lpgCount: 0,
    methaneCount: 0,
    hybridCount: 0,
    electricalCount: 0,
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    gear: '',
    diesel: false,
    electrical: false,
    hybrid: false,
    methane: false,
    gpl: false,
    coupe: false,
    petrol: false,
    convertible: false,
    city_ca: false,
    station_wagon: false,
    sedan: false,
    suv: false,
    pickup: false,
    van: false,
    mpv: false,
    sports: false,
    automatic: false,
    manual: false,
    zero: false,
    neww: false,
    used: false,
    cars: []
  }),

  mounted() {
    this.fetchCars()
  },

  methods: {
    async filter() {
      if (this.petrol) {
        if (!this.$store.state.carss.fuel.includes('petrol')) {
          this.$store.commit(
            'carss/setFuel',
            this.$store.state.carss.fuel + 'petrol '
          )
          console.log(this.$store.state.carss.fuel)
        }
      } else if (!this.petrol) {
        if (this.$store.state.carss.fuel.includes('petrol')) {
          const currentFuel = this.$store.state.carss.fuel.replace('petrol', '')
          this.$store.commit('carss/setFuel', currentFuel)
          console.log(this.$store.state.carss.fuel)
        }
      }

      if (this.diesel) {
        if (!this.$store.state.carss.fuel.includes('diesel')) {
          this.$store.commit(
            'carss/setFuel',
            this.$store.state.carss.fuel + 'diesel '
          )
          console.log(this.$store.state.carss.fuel)
        }
      } else if (!this.diesel) {
        if (this.$store.state.carss.fuel.includes('diesel')) {
          const currentFuel = this.$store.state.carss.fuel.replace('diesel', '')
          this.$store.commit('carss/setFuel', currentFuel)
          console.log(this.$store.state.carss.fuel)
        }
      }

      if (this.methane) {
        if (!this.$store.state.carss.fuel.includes('methane')) {
          this.$store.commit(
            'carss/setFuel',
            this.$store.state.carss.fuel + 'methane '
          )
          console.log(this.$store.state.carss.fuel)
        }
      } else if (!this.methane) {
        if (this.$store.state.carss.fuel.includes('methane')) {
          const currentFuel = this.$store.state.carss.fuel.replace(
            'methane',
            ''
          )
          this.$store.commit('carss/setFuel', currentFuel)
          console.log(this.$store.state.carss.fuel)
        }
      }

      if (this.hybrid) {
        if (!this.$store.state.carss.fuel.includes('hybrid')) {
          this.$store.commit(
            'carss/setFuel',
            this.$store.state.carss.fuel + 'hybrid '
          )
          console.log(this.$store.state.carss.fuel)
        }
      } else if (!this.hybrid) {
        if (this.$store.state.carss.fuel.includes('hybrid')) {
          const currentFuel = this.$store.state.carss.fuel.replace('hybrid', '')
          this.$store.commit('carss/setFuel', currentFuel)
          console.log(this.$store.state.carss.fuel)
        }
      }

      if (this.gpl) {
        if (!this.$store.state.carss.fuel.includes('lpg')) {
          this.$store.commit(
            'carss/setFuel',
            this.$store.state.carss.fuel + 'lpg '
          )
          console.log(this.$store.state.carss.fuel)
        }
      } else if (!this.gpl) {
        if (this.$store.state.carss.fuel.includes('lpg')) {
          const currentFuel = this.$store.state.carss.fuel.replace('lpg', '')
          this.$store.commit('carss/setFuel', currentFuel)
          console.log(this.$store.state.carss.fuel)
        }
      }

      if (this.electrical) {
        if (!this.$store.state.carss.fuel.includes('electrical')) {
          this.$store.commit(
            'carss/setFuel',
            this.$store.state.carss.fuel + 'electrical '
          )
          console.log(this.$store.state.carss.fuel)
        }
      } else if (!this.electrical) {
        if (this.$store.state.carss.fuel.includes('electrical')) {
          const currentFuel = this.$store.state.carss.fuel.replace(
            'electrical',
            ''
          )
          this.$store.commit('carss/setFuel', currentFuel)
          console.log(this.$store.state.carss.fuel)
        }
      }

      const finalFuel = this.$store.state.carss.fuel.replace(/\s/g, ',')
      console.log(finalFuel)
      const response = await axios.get(
        `https://dms.automix.com/api/v1/it/vehicles?filter[fuel]=${finalFuel}`
      )
      this.$store.commit('carss/setCars', response.data.data)
      this.cars = this.$store.state.carss.cars
    },
    async fetchCars() {
      this.$store.commit('carss/setCars', this.cars)
      const response = await axios.get(
        `https://dms.automix.com/api/v1/it/vehicles`
      )
      this.$store.commit('carss/setCars', response.data.data)
      this.cars = this.$store.state.carss.cars
      console.log(this.cars)
      const that = this
      this.cars.forEach(function(f) {
        console.log('code is: ', f.fuel_code)
        if (f.fuel_code === 'petrol') that.petrolCount = that.petrolCount + 1
        if (f.fuel_code === 'diesel') that.dieselCount = that.dieselCount + 1
        if (f.fuel_code === 'hybrid') that.hybridCount = that.hybridCount + 1
        if (f.fuel_code === 'lpg') that.lpgCount = that.lpgCount + 1
        if (f.fuel_code === 'electrical')
          that.electricalCount = that.electricalCount + 1
        if (f.fuel_code === 'methane') that.methaneCount = that.methaneCount + 1
      })
    }
  },

  ...mapMutations({
    fetchCars: 'fetchCars'
  })
}
</script>
