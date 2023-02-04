<template>
	<div class="container">
		<form>
			<p class="hint mb-1">Пример, какой адрес сайта нужно вписывать - google.com</p>

			<u-title class="mb-1" level="1" size="20">Адрес вашей страницы</u-title>

			<div class="flex mb-2">
				<u-dropdown :options="options" :selected-option="selectedProtocol" @click-item="handleSelectProtocol" />
				<u-input v-model="inputAddress" v-focus type="text" placeholder="Введите адрес страницы" />
			</div>

			<u-title class="mb-2" size="20">Источник трафика</u-title>

			<u-field-group type="radio" class="mb-2">
				<u-radio-items :radios="radioItems" :selected-radio-id="selectedRadioId" @change-radio="changeRadioItem"/>
			</u-field-group>

			<u-field-group type="edit" class="mb-2">
				<u-title size="20">Обязательные параметры</u-title>
				<u-title size="20">Необязательные параметры</u-title>

				<u-field-item 
					v-for="field in fieldItems" 
					:key="field.name" 
					v-model="fields.values[field.name]" 
					:hint="fields.hints[field.hint]"
					:name="field.name" 
					:placeholder="field.placeholder"
				/>
				
			</u-field-group>

			<u-title class="mb-1" size="20">Результат</u-title>

			<div class="flex">
				<u-button :disabled="disableButton" class="button-md-w100 mb-md-1" @click.prevent="copyResult">Копировать ссылку</u-button>
				<u-input v-model="calculateOutputAddress" type="text" placeholder="Введите адрес страницы" readonly/>
			</div>
		</form>
	</div>

	<u-popup-copy :is-visible="showPopup"/>
</template>
<script>
import { protocols, radioItems, fields, values, hints } from '@/constants/';
import URadioItems from '@/components/URadioItems.vue';
import UFieldItem from '@/components/UFieldItem.vue';

export default {
	components: {
		URadioItems,
		UFieldItem,
	},

	data() {
		return {
			selectedProtocol: protocols.http,
			inputAddress: '',
			baseUrl: {
				protocol: protocols.http,
				address: '',
			},
			disableButton: true,
			showPopup: false,
			fields: {
				values: {
					utm_source: '',
					utm_content: '',
					utm_medium: '',
					utm_term: '',
					utm_campaign: '',
				},
				hints: {},
			},
			selectedRadioId: 'own-choose-radio'
		};
	},

	computed: {
		calculateOutputAddress() {
			let str = Object.entries(this.fields.values)
				.map(([key, val]) => {
					return val ? `${key}=${val}&` : null;
				})
				.join('');

			str = str.slice(0, str.length - 1);

			return this.baseUrl.address !== '' ? `${Object.values(this.baseUrl).join('')}/?${str}` : '';
		},

		fieldItems() {
			return fields;
		},

		radioItems() {
			return radioItems;
		},

		options() {
			return [protocols.http, protocols.https];
		}
	},

	watch: {
		inputAddress(newValue) {

			this.baseUrl.address = newValue;

			if (newValue === '') {
				this.disableButton = true;
				return;
			}

			this.disableButton = false;
		},

		selectedProtocol(newValue) {
			this.baseUrl.protocol = newValue;
		},
	},

	methods: {
		handleSelectProtocol(protocol) {
			this.selectedProtocol = protocol;
		},

		changeRadioItem(id) {
			if (id === 'own-choose-radio') {
				this.fields.hints = {};
				this.fields.values = {};
				return;
			}

			this.selectedRadioId = id;

			this.fields.hints = hints[id];
			this.fields.values = values[id];
		},

		copyResult() {
			navigator.clipboard.writeText(this.calculateOutputAddress);

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
			this.fields.values = {
				utm_source: '',
				utm_content: '',
				utm_medium: '',
				utm_term: '',
				utm_campaign: '',
			};
			this.fields.hints = {};
			this.selectedProtocol = protocols.http;
			this.inputAddress = '';
			this.selectedRadioId = 'own-choose-radio';
		}
	}
};
</script>

<style lang="scss">
@import './assets/_base.scss';

.hint {
	font-size: 13px;
	line-height: 1.4;
	color: var(--color-gray);
}
</style>