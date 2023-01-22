<template>
	<u-button>Кнопка обычная</u-button>
	<u-button disabled>Кнопка выключена</u-button>
	<u-title>Это заголовок</u-title>
	<u-label for="id">Это лейбл</u-label>
	<u-hint>Это подсказка</u-hint>
	<u-input type="text" placeholder="Это плейсхолдер"/>
	<u-radio>Это радио-кнопка</u-radio>
	<u-dropdown :options="['option1', 'option2']" />
	<u-fieldlabel name="utm_campaign"/>
	<u-fieldgroup typeField="radio">
		<u-hint>Это подсказка</u-hint>
		<u-input type="text" placeholder="Это плейсхолдер"/>
	</u-fieldgroup>

	<u-fieldgroup typeField="edit">
		<u-hint>Это подсказка</u-hint>
		<u-input type="text" placeholder="Это плейсхолдер"/>
	</u-fieldgroup>
</template>

<style lang="scss">
@import './assets/_base.scss';
</style>
