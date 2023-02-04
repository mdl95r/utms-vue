export const fields = [
  {
    label: 'Источник кампании',
    name: 'utm_source',
    placeholder: 'google, yandex, vk, facebook',
  },
  {
    label: 'Тип трафика',
    name: 'utm_medium',
    placeholder: 'cpc, email, banner, article',
  },
  {
    label: 'Название кампании',
    name: 'utm_campaign',
    hint: 'utm_campaign_hint',
    placeholder: 'cpc, email, banner, article',
  },
  {
    label: 'Идентификатор объявления',
    name: 'utm_content',
    hint: 'utm_content_hint',
    placeholder: 'link, landing page',
  },
  {
    label: 'Ключевое слово',
    name: 'utm_term',
    hint: 'utm_term_hint',
    placeholder: 'free, -30%, registration',
  },
];

export const hints = {
  google: {
    utm_campaign_hint:
      "Вместо {network} Google Adwords подставит 'g' (поиск), 's' (поисковый партнер) или 'd' (КМС)",
    utm_content_hint:
      'Вместо {creative} Google Adwords автоматически подставит ID объявления',
    utm_term_hint:
      'Вместо {keyword} Google Adwords автоматически подставит ключевое слово',
  },
  yandex: {
    utm_campaign_hint:
      'Вместо {campaign_id} Яндекс.Директ автоматически подставит ID кампании',
    utm_content_hint:
      'Вместо {ad_id} Яндекс.Директ автоматически подставит ID объявления',
    utm_term_hint:
      'Вместо {keyword} Яндекс.Директ автоматически подставит ключевое слово',
  },
  vk: {
    utm_campaign_hint:
      'Вместо {campaign_id} Вконтакте автоматически подставит ID объявления',
    utm_content_hint:
      'Вместо {ad_id} Вконтакте автоматически подставит ID объявления',
    utm_term_hint: null,
  },
  facebook: {
    utm_campaign_hint: null,
    utm_content_hint: null,
    utm_term_hint: null,
  },
};

export const values = {
  google: {
    utm_source: 'google',
    utm_content: '{creative}',
    utm_medium: 'cpc',
    utm_term: '{keyword}',
    utm_campaign: '{network}',
  },
  yandex: {
    utm_source: 'yandex',
    utm_content: '{ad_id}',
    utm_medium: 'cpc',
    utm_term: '{keyword}',
    utm_campaign: '{campaign_id}',
  },
  vk: {
    utm_source: 'vkontakte',
    utm_content: '{ad_id}',
    utm_medium: 'cpc',
    utm_term: '',
    utm_campaign: '{campaign_id}',
  },
  facebook: {
    utm_source: 'facebook',
    utm_content: '',
    utm_medium: 'cpc',
    utm_term: '',
    utm_campaign: 'promo',
  },
};

export const protocols = {
  http: 'http://',
  https: 'https://',
};

export const radioItems = [
  { name: 'Свои значения', id: 'own-choose-radio' },
  { name: 'Google Adwords', id: 'google' },
  { name: 'Яндекс.Директ', id: 'yandex' },
  { name: 'Вконтакте', id: 'vk' },
  { name: 'Facebook', id: 'facebook' },
];
