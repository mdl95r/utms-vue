<template>
	<div class="container">
		<form>
			<u-hint class="mb-1">Пример, какой адрес сайта нужно вписывать - google.com</u-hint>
			<u-title class="fz-24 mb-1">Адрес вашей страницы</u-title>

			<div class="flex mb-2">
				<u-dropdown :options="options" :selected-option="selectedProtocol" @click-item="protocolHandler" />
				<u-input v-model="inputAddress" v-focus type="text" placeholder="Введите адрес страницы" />
			</div>

			<u-title class="fz-24 mb-2">Источник трафика</u-title>

			<u-fieldgroup type-field="radio" class="mb-2">
				<u-radioitems :radios="radioItems" :selectedRadioId="selectedRadioId" @change-radio="changeRadioItem"/>
			</u-fieldgroup>

			<u-fieldgroup type-field="edit" class="mb-2">
				<u-title>Обязательные параметры</u-title>
				<u-title>Необязательные параметры</u-title>

				<u-fielditems :fields="fieldItems" :values="socialValues" :hints="hints"/>
			</u-fieldgroup>

			<u-title class="fz-24 mb-1">Результат</u-title>

			<div class="flex">
				<u-button :disabled="disabledButton" class="button-md-w100 mb-md-1" @click.prevent="copyResult">Копировать ссылку</u-button>
				<u-input v-model="calcOutputAddress" type="text" placeholder="Введите адрес страницы" readonly/>
			</div>
		</form>
	</div>

	<u-popup-copy :is-visible="showPopup"/>
</template>
<script>
import { protocols, baseUrl, radioItems, fields, socials, hints, socialValues } from '@/constants/';
import uRadioitems from '@/components/RadioItems/uRadioitems.vue';
import uFielditems from '@/components/FieldItems/uFielditems.vue';

export default {
	components: {
		uRadioitems,
		uFielditems,
	},

	data() {
		return {
			options: [protocols.http, protocols.https],
			selectedProtocol: protocols.http,
			inputAddress: '',
			baseUrl: { ...baseUrl, protocol: protocols.http },
			radioItems: radioItems,
			fieldItems: fields,
			socialValues: socialValues,
			hints: {},
			disabledButton: true,
			showPopup: false,
			selectedRadioId: 'own-choose-radio'
		};
	},

	computed: {
		calcOutputAddress() {
			let str = Object.entries(this.socialValues)
				.map(([key, val]) => {
					return val ? `${key}=${val}&` : null;
				})
				.join('');

			str = str.slice(0, str.length - 1);

			return this.baseUrl.address !== '' ? `${Object.values(this.baseUrl).join('')}/?${str}` : '';
		}
	},

	watch: {
		inputAddress(newValue) {

			this.baseUrl.address = newValue;

			if (newValue === '') {
				this.disabledButton = true;
				return;
			}

			this.disabledButton = false;
		},

		selectedProtocol(newValue) {
			this.baseUrl.protocol = newValue;
		},
	},

	methods: {
		protocolHandler(protocol) {
			this.selectedProtocol = protocol;
		},

		changeRadioItem(id) {
			if (id === 'own-choose-radio') {
				this.hints = {};
				this.socialValues = {};
				return;
			}

			this.selectedRadioId = id;

			this.hints = hints[id];
			this.socialValues = socials[id];
		},

		copyResult() {
			navigator.clipboard.writeText(this.calcOutputAddress);

			this.resetData();

			this.tooglePopup();
		},

		tooglePopup() {
			this.showPopup = true;

			setTimeout(() => {
				this.showPopup = false;
			}, 2000);
		},

		resetData() {
			this.socialValues = socialValues;
			this.selectedProtocol = protocols.http;
			this.hints = {};
			this.inputAddress = '';
			this.selectedRadioId = 'own-choose-radio';
		}
	}
};
</script>

<style lang="scss">
@import './assets/_base.scss';
</style>