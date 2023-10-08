<script lang="ts">
    import { Currencies } from './exchangeSymbols'
    import { createEventDispatcher } from 'svelte';
    
    let selectedCurrency = '';


    function handleCurrencyChange(event: Event) {
        const target = event.target as HTMLInputElement | null;
        if (target) {
        selectedCurrency = target.value;
        }
    }
    function handleCurrencyChange2(event: Event) {
        const target = event.target as HTMLInputElement | null;
        if (target?.checked) {
        selectedCurrency = target.value;
        }
    }

</script>

<div class="columns">
    <div class="column">
        {#each Currencies as currency (currency)}
            <label>
                <input
                type="radio"
                name="currency"
                value={currency}
                on:change={handleCurrencyChange}
                    />
                    {currency}
            </label>
        {/each}
    </div>
    <div class="column">
        {#each Currencies as currency (currency)}
            <label>
                <input
                type="radio"
                name="currency2"
                value={currency}
                on:change={handleCurrencyChange2}
                    />
                    {currency}
            </label>
        {/each}
    </div>

    
</div>

<style>
    .columns {
        display: flex;
        justify-content: space-between;
    }

    .column {
        flex-basis: calc(50% - 10px); 
        margin-right: 10px;
        margin-bottom: 10px;
  }

</style>