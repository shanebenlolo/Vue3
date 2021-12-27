<template>
  <div>
    <div class="viewer">
      <vc-viewer>
        <vc-compass />
        <VcNavigationSm position="top-left" offset="[0,100]" />
        <VcOverviewMap />
      </vc-viewer>
    </div>
  </div>
</template>

<style>
.viewer {
  width: 100%;
  height: 100%;
}
.navigationSm {
  position: absolute;
  top: 40px;
  left: 40px;
}
</style>
