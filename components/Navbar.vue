<template>
  <div>
    <b-container>
      <b-navbar toggleable="lg">
        <nuxt-link class="navbar-brand mx-5 text-light" to="/home">
          <h1 class="mt-2 mx-5 text-light">OolBrain</h1>
        </nuxt-link>

        <b-navbar-toggle class="bg-light center" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-row>
            <b-col>
              <b-dropdown
                id="dropdown"
                text="Pipeline"
                variant="outline-light"
                class="m-3"
              >
                <b-dropdown-item href="/pipeline">Overview</b-dropdown-item>
                <b-dropdown-item href="/pipeline/art">Art</b-dropdown-item>
                <b-dropdown-item href="/pipeline/assets">Assets</b-dropdown-item>
                <b-dropdown-item href="/pipeline/sequence">Sequence</b-dropdown-item>
                <b-dropdown-item href="/in_progress">Client</b-dropdown-item>
                <b-dropdown-item href="/in_progress">Timetable</b-dropdown-item>
                <b-dropdown-item href="/in_progress">Reviews</b-dropdown-item>
                <b-dropdown-item href="/in_progress">AssetLibrary</b-dropdown-item>
              </b-dropdown>
              <b-dropdown
                id="dropdown"
                text="Filesystem"
                variant="outline-light"
                class="m-3"
              >
                <b-dropdown-item href="/filesystem">Overview</b-dropdown-item>
              </b-dropdown>
              <b-dropdown
                id="dropdown"
                text="Toolkits"
                variant="outline-light"
                class="m-3"
              >
                <b-dropdown-item href="/toolkits">Overview</b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar {
  background-color: rgb(30, 30, 30);
}

.navbar-brand {
  font-family: "Old Standard TT", serif;
}
.navbar-toggle {
  background-color: white;
}
</style>