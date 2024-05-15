<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          {{ new Date().getFullYear() }} © Minia.
          <!-- <script>document.write(new Date().getFullYear())</scrip> © Minia. -->
        </div>
        <div class="col-sm-6">
          <div class="text-sm-end d-none d-sm-block">
            Design & Develop by
            <a href="#!" class="text-decoration-underline">Themesbrand</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
