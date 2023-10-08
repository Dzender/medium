<script lang="ts">
  import { fetchApiData } from './lib/counter';
  import Radiobuttons from './lib/radiobuttons.svelte';


  function handleClick() {
    const data = fetchApiData('https://v6.exchangerate-api.com/v6/e0e5ee25c36472e2dd5773aa/latest/USD')
    console.log(data); 
  }

  let isRadioButtonsVisible: boolean = true;
  function toggleRadioButtonsVisibility() {
    isRadioButtonsVisible = !isRadioButtonsVisible;
  }

  function firstInputChange(){
    
  }

  function secondInputChange(){

  }

</script>

<main>
  <div class="wrapper">
    <div class="currencySelect">
      {#if isRadioButtonsVisible}
        <Radiobuttons/>
      {/if}
      <button class="seeMore" on:click={toggleRadioButtonsVisibility}>
          {#if isRadioButtonsVisible}
            Свернуть выбор
          {:else}
            Развернуть выбор
          {/if}
      </button>
    </div>
    <div class="currencyAmount">
      <input type="number" class="firstInput" on:change={firstInputChange}/>
      <input type="number" class="secondInput" on:change={secondInputChange}/>
    </div>
  </div>
</main>

<style>
  .seeMore{
    height: 100%;
    width: 100%;
  }
  .wrapper{
    height: auto;
    width: 100%;
  }
</style>
