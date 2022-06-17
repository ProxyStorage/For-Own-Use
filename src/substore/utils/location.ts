export interface LocationList {
  /**
   * 地区中文名
   */
  zh?: string
  /**
   * 地区英文名（简写）
   */
  enShort?: string

  /**
   * 三位简称英文
   */
  enShortThree?: string
  /**
   * 地区中文名（全称）
   */
  enFull?: string
  /**
   * 匹配正则字符串
   */
  reg: string
  /**
   * 自定义显示名称
   */
  custom?: string
  /**
   * 国旗
   */
  flag?: string
}
export interface ModifiedList extends LocationList {
  /**
   * 操作匹配后的操作
   */
  action: 'rename' | 'delete'
}
export interface DeleteList extends LocationList {}
export interface ActionObject {
  locationList: LocationList[]
  modifiedList: ModifiedList[]
  deleteList: DeleteList[]
}
const locationList: LocationList[] = [
  {
    zh: '懒人节点',
    enShort: 'lazy',
    enFull: 'lazy person',
    reg: '懒人',
    custom: 'lazy',
    flag: '🏴‍☠️',
    enShortThree: ''
  },
  {
    zh: '网易云',
    enShort: 'Netease',
    enFull: 'Netease Unblock',
    reg: 'Netease|unblock|unlock|music',
    custom: 'Music',
    flag: '🇨🇳',
    enShortThree: ''
  },
  {
    zh: '香港',
    enShort: 'HK',
    enFull: 'Hong Kong',
    reg: 'HK|Hong Kong|HK|Hongkong|Hong Kong|HongKong|HONG KONG|香港|深港|沪港|呼港|HKT|HKBN|HGC|WTT|CMI|穗港|京港|港',
    custom: 'HK',
    flag: '🇭🇰',
    enShortThree: 'HKG'
  },
  {
    zh: '澳门',
    enShort: 'MO',
    enFull: 'Macao',
    reg: 'MO|Macao|MO|Macao|澳门|澳門|CTM',
    custom: 'MO',
    flag: '🇲🇴',
    enShortThree: 'MAC'
  },
  {
    zh: '台湾',
    enShort: 'TW',
    enFull: 'Taiwan',
    reg: 'TW|Taiwan|TW|Taiwan|TAIWAN|台湾|台北|台中|新北|彰化|CHT|台|HINET|Taipei',
    custom: 'TW',
    flag: '🇨🇳',
    enShortThree: 'TWN'
  },
  {
    zh: '日本',
    enShort: 'JP',
    enFull: 'Japan',
    reg: 'JP|Japan|JP|Japan|JAPAN|日本|东京|大阪|埼玉|沪日|穗日|川日|中日|泉日|杭日|深日|辽日|广日|大坂|Osaka|Tokyo',
    custom: 'JP',
    flag: '🇯🇵',
    enShortThree: 'JPN'
  },
  {
    zh: '韩国',
    enShort: 'KR',
    enFull: 'Korea',
    reg: 'KR|Korea|KR|Korea|KOR|韩国|首尔|韩|韓|春川|Chuncheon|Seoul',
    custom: 'KR',
    flag: '🇰🇷',
    enShortThree: 'KOR'
  },
  {
    zh: '新加坡',
    enShort: 'SG',
    enFull: 'Singapore',
    reg: 'SG|Singapore|SG|Singapore|SINGAPORE|新加坡|狮城|沪新|京新|泉新|穗新|深新|杭新|广新|廣新|滬新',
    custom: 'SG',
    flag: '🇸🇬',
    enShortThree: 'SGP'
  },
  {
    zh: '密歇根',
    enShort: 'Michigan',
    enFull: 'Michigan',
    reg: 'Michigan|Michigan',
    custom: 'US',
    flag: '🇺🇸',
    enShortThree: 'USA'
  },
  {
    zh: '美国',
    enShort: 'US',
    enFull: 'United States',
    reg: 'US|United States|US|USA|America|United States|美国|美|京美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|矽谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|沪美|哥伦布|纽约|Los Angeles|San Jose|Sillicon Valley',
    custom: 'US',
    flag: '🇺🇸',
    enShortThree: 'USA'
  },
  {
    zh: '英国',
    enShort: 'GB',
    enFull: 'United Kingdom',
    reg: 'UK|United Kingdom|England|United Kingdom|英国|伦敦|英|London',
    custom: 'UK',
    flag: '🇬🇧',
    enShortThree: 'GBR'
  },
  {
    zh: '法国',
    enShort: 'FR',
    enFull: 'France',
    reg: 'FR|France|FR|France|法国|法國|巴黎',
    custom: 'FR',
    flag: '🇫🇷',
    enShortThree: 'FRA'
  },
  {
    zh: '法兰克福',
    enShort: 'Frankfurt',
    enFull: 'Frankfurt',
    reg: '法兰克福|Frankfurt',
    flag: '🇩🇪',
    enShortThree: 'DEU'
  },
  {
    zh: '德国',
    enShort: 'DE',
    enFull: 'Germany',
    reg: 'DE|Germany|DE|German|GERMAN|德国|德國|法兰克福|京德|滬德|廣德|沪德|广德|Frankfurt',
    custom: 'DE',
    flag: '🇩🇪',
    enShortThree: 'DEU'
  },
  {
    zh: '澳大利亚',
    enShort: 'AU',
    enFull: 'Australia',
    reg: 'AU|Australia|AU|Australia|Sydney|澳大利亚|澳洲|墨尔本|悉尼|土澳|京澳|廣澳|滬澳|沪澳|广澳',
    custom: 'AU',
    flag: '🇦🇺',
    enShortThree: 'AUS'
  },
  {
    zh: '阿富汗',
    enShort: 'AF',
    enFull: 'Afghanistan',
    reg: 'AF|Afghanistan',
    enShortThree: 'AFG'
  },
  {
    zh: '阿尔巴尼亚',
    enShort: 'AL',
    enFull: 'Albania',
    reg: 'AL|Albania|阿爾巴尼亞|阿尔巴尼亚',
    flag: '🇦🇱',
    enShortThree: 'ALB'
  },
  {
    zh: '阿尔及利亚',
    enShort: 'DZ',
    enFull: 'Algeria',
    reg: 'DZ|Algeria',
    enShortThree: 'DZA'
  },
  {
    zh: '安哥拉',
    enShort: 'AO',
    enFull: 'Angola',
    reg: 'AO|Angola',
    enShortThree: 'AGO'
  },
  {
    zh: '阿根廷',
    enShort: 'AR',
    enFull: 'Argentina',
    reg: 'AR|Argentina|AR|阿根廷',
    flag: '🇦🇷',
    enShortThree: 'ARG'
  },
  {
    zh: '亚美尼亚',
    enShort: 'AM',
    enFull: 'Armenia',
    reg: 'AM|Armenia',
    enShortThree: 'ARM'
  },
  {
    zh: '奥地利',
    enShort: 'AT',
    enFull: 'Austria',
    reg: 'AT|Austria|奥地利|奧地利|Austria|维也纳',
    flag: '🇦🇹',
    enShortThree: 'AUT'
  },
  {
    zh: '阿塞拜疆',
    enShort: 'AZ',
    enFull: 'Azerbaijan',
    reg: 'AZ|Azerbaijan|阿塞拜疆',
    flag: '🇦🇿',
    enShortThree: 'AZE'
  },
  {
    zh: '巴林',
    enShort: 'BH',
    enFull: 'Bahrain',
    reg: 'BH|Bahrain|BH|巴林',
    flag: '🇧🇭',
    enShortThree: 'BHR'
  },
  {
    zh: '比利时',
    enShort: 'BE',
    enFull: 'Belgium',
    reg: 'BE|Belgium|BE|比利時|比利时',
    flag: '🇧🇪',
    enShortThree: 'BEL'
  },
  {
    zh: '伯利兹',
    enShort: 'BZ',
    enFull: 'Belize',
    reg: 'BZ|Belize',
    enShortThree: 'BLZ'
  },
  {
    zh: '贝宁',
    enShort: 'BJ',
    enFull: 'Benin',
    reg: 'BJ|Benin',
    enShortThree: 'BEN'
  },
  {
    zh: '不丹',
    enShort: 'BT',
    enFull: 'Bhutan',
    reg: 'BT|Bhutan',
    enShortThree: 'BTN'
  },
  {
    zh: '玻利维亚',
    enShort: 'BO',
    enFull: 'Bolivia',
    reg: 'BO|Bolivia',
    enShortThree: 'BOL'
  },
  {
    zh: '波黑',
    enShort: 'BA',
    enFull: 'Bosnia and Herzegovina',
    reg: 'BA|Bosnia and Herzegovina|波黑共和国|波黑',
    flag: '🇧🇦',
    enShortThree: 'BIH'
  },
  {
    zh: '博茨瓦纳',
    enShort: 'BW',
    enFull: 'Botswana',
    reg: 'BW|Botswana',
    enShortThree: 'BWA'
  },
  {
    zh: '巴西',
    enShort: 'BR',
    enFull: 'Brazil',
    reg: 'BR|Brazil|BR|Brazil|巴西|圣保罗',
    flag: '🇧🇷',
    enShortThree: 'BRA'
  },
  {
    zh: '英属维京群岛',
    enShort: 'VG',
    enFull: 'British Virgin Islands',
    reg: 'VG|British Virgin Islands',
    enShortThree: 'VGB'
  },
  {
    zh: '文莱',
    enShort: 'BN',
    enFull: 'Brunei',
    reg: 'BN|Brunei',
    enShortThree: 'BRN'
  },
  {
    zh: '保加利亚',
    enShort: 'BG',
    enFull: 'Bulgaria',
    reg: 'BG|Bulgaria|保加利亚|保加利亞|Bulgaria',
    flag: '🇧🇬',
    enShortThree: 'BGR'
  },
  {
    zh: '布基纳法索',
    enShort: 'BF',
    enFull: 'Burkina-faso',
    reg: 'BF|Burkina-faso',
    enShortThree: 'BFA'
  },
  {
    zh: '布隆迪',
    enShort: 'BI',
    enFull: 'Burundi',
    reg: 'BI|Burundi',
    enShortThree: 'BDI'
  },
  {
    zh: '柬埔寨',
    enShort: 'KH',
    enFull: 'Cambodia',
    reg: 'KH|Cambodia|柬埔寨',
    flag: '🇰🇭',
    enShortThree: 'KHM'
  },
  {
    zh: '喀麦隆',
    enShort: 'CM',
    enFull: 'Cameroon',
    reg: 'CM|Cameroon',
    enShortThree: 'CMR'
  },
  {
    zh: '加拿大',
    enShort: 'CA',
    enFull: 'Canada',
    reg: 'CA|Canada|Canada|CANADA|CAN|Waterloo|加拿大|蒙特利尔|温哥华|楓葉|枫叶|滑铁卢|多伦多|CA',
    flag: '🇨🇦',
    enShortThree: 'CAN'
  },
  {
    zh: '佛得角',
    enShort: 'CV',
    enFull: 'Cape Verde',
    reg: 'CV|Cape Verde',
    enShortThree: 'CPV'
  },
  {
    zh: '开曼群岛',
    enShort: 'KY',
    enFull: 'Cayman Islands',
    reg: 'KY|Cayman Islands',
    enShortThree: 'CYM'
  },
  {
    zh: '中非共和国',
    enShort: 'CF',
    enFull: 'Central African Republic',
    reg: 'CF|Central African Republic',
    enShortThree: 'CAF'
  },
  {
    zh: '乍得',
    enShort: 'TD',
    enFull: 'Chad',
    reg: 'TD|Chad',
    enShortThree: 'TCD'
  },
  {
    zh: '智利',
    enShort: 'CL',
    enFull: 'Chile',
    reg: 'CL|Chile|智利',
    flag: '🇨🇱',
    enShortThree: 'CHL'
  },
  {
    zh: '中国',
    enShort: 'CN',
    enFull: 'China',
    reg: 'CN|China|CN|China|回国|中国|中國|江苏|北京|上海|广州|深圳|杭州|徐州|青岛|宁波|镇江|back',
    custom: 'CN',
    flag: '🇨🇳',
    enShortThree: 'CHN'
  },
  {
    zh: '哥伦比亚',
    enShort: 'CO',
    enFull: 'Colombia',
    reg: 'CO|Colombia|哥伦比亚',
    flag: '🇨🇴',
    enShortThree: 'COL'
  },
  {
    zh: '科摩罗',
    enShort: 'KM',
    enFull: 'Comoros',
    reg: 'KM|Comoros',
    enShortThree: 'COM'
  },
  {
    zh: '刚果(布)',
    enShort: 'CG',
    enFull: 'Congo - Brazzaville',
    reg: 'CG|Congo - Brazzaville',
    enShortThree: 'COG'
  },
  {
    zh: '刚果(金)',
    enShort: 'CD',
    enFull: 'Congo - Kinshasa',
    reg: 'CD|Congo - Kinshasa',
    enShortThree: 'COD'
  },
  {
    zh: '哥斯达黎加',
    enShort: 'CR',
    enFull: 'Costa Rica',
    reg: 'CR|Costa Rica|CR|哥斯达黎加',
    flag: '🇨🇷',
    enShortThree: 'CRI'
  },
  {
    zh: '克罗地亚',
    enShort: 'HR',
    enFull: 'Croatia',
    reg: 'HR|Croatia|克罗地亚|HR|克羅地亞',
    flag: '🇭🇷',
    enShortThree: 'HRV'
  },
  {
    zh: '塞浦路斯',
    enShort: 'CY',
    enFull: 'Cyprus',
    reg: 'CY|Cyprus|CY|塞浦路斯',
    flag: '🇨🇾',
    enShortThree: 'CYP'
  },
  {
    zh: '捷克共和国',
    enShort: 'CZ',
    enFull: 'Czech Republic',
    reg: 'CZ|Czech Republic|Czechia|捷克',
    flag: '🇨🇿',
    enShortThree: 'CZE'
  },
  {
    zh: '丹麦',
    enShort: 'DK',
    enFull: 'Denmark',
    reg: 'DK|Denmark|DK|DNK|丹麦|丹麥',
    flag: '🇩🇰',
    enShortThree: 'DNK'
  },
  {
    zh: '吉布提',
    enShort: 'DJ',
    enFull: 'Djibouti',
    reg: 'DJ|Djibouti',
    enShortThree: 'DJI'
  },
  {
    zh: '多米尼加共和国',
    enShort: 'DO',
    enFull: 'Dominican Republic',
    reg: 'DO|Dominican Republic',
    enShortThree: 'DOM'
  },
  {
    zh: '厄瓜多尔',
    enShort: 'EC',
    enFull: 'Ecuador',
    reg: 'EC|Ecuador|EC|厄瓜多尔',
    flag: '🇪🇨',
    enShortThree: 'ECU'
  },
  {
    zh: '埃及',
    enShort: 'EG',
    enFull: 'Egypt',
    reg: 'EG|Egypt|埃及',
    flag: '🇪🇬',
    enShortThree: 'EGY'
  },
  {
    zh: '萨尔瓦多',
    enShort: 'SV',
    enFull: 'EI Salvador',
    reg: 'SV|EI Salvador',
    enShortThree: 'SLV'
  },
  {
    zh: '赤道几内亚',
    enShort: 'GQ',
    enFull: 'Equatorial Guinea',
    reg: 'GQ|Equatorial Guinea',
    enShortThree: 'GNQ'
  },
  {
    zh: '荷兰',
    enShort: 'NL',
    enFull: 'Netherlands',
    reg: 'Netherlands|NL|荷兰|荷蘭|尼德蘭|阿姆斯特丹',
    flag: '🇳🇱',
    enShortThree: 'NLD'
  },
  {
    zh: '厄立特里亚',
    enShort: 'ER',
    enFull: 'Eritrea',
    reg: 'Eritrea',
    enShortThree: 'ERI',
    flag: '🇪🇷'
  },
  {
    zh: '爱沙尼亚',
    enShort: 'EE',
    enFull: 'Estonia',
    reg: 'EE|Estonia|爱沙尼亚',
    flag: '🇪🇪',
    enShortThree: 'EST'
  },
  {
    zh: '埃塞俄比亚',
    enShort: 'ET',
    enFull: 'Ethiopia',
    reg: 'ET|Ethiopia',
    enShortThree: 'ETH'
  },
  {
    zh: '斐济',
    enShort: 'FJ',
    enFull: 'Fiji',
    reg: 'FJ|Fiji',
    enShortThree: 'FJI'
  },
  {
    zh: '芬兰',
    enShort: 'FI',
    enFull: 'Finland',
    reg: 'FI|Finland|Finland|芬兰|芬蘭|赫尔辛基',
    flag: '🇫🇮',
    enShortThree: 'FIN'
  },
  {
    zh: '加蓬',
    enShort: 'GA',
    enFull: 'Gabon',
    reg: 'GA|Gabon',
    enShortThree: 'GAB'
  },
  {
    zh: '冈比亚',
    enShort: 'GM',
    enFull: 'Gambia',
    reg: 'GM|Gambia',
    enShortThree: 'GMB'
  },
  {
    zh: '格鲁吉亚',
    enShort: 'GE',
    enFull: 'Georgia',
    reg: 'GE|Georgia|格魯吉亞|格鲁吉亚',
    flag: '🇬🇪',
    enShortThree: 'GEO'
  },
  {
    zh: '加纳',
    enShort: 'GH',
    enFull: 'Ghana',
    reg: 'GH|Ghana',
    enShortThree: 'GHA'
  },
  {
    zh: '希腊',
    enShort: 'GR',
    enFull: 'Greece',
    reg: 'GR|Greece|希腊|希臘',
    flag: '🇬🇷',
    enShortThree: 'GRC'
  },
  {
    zh: '格陵兰',
    enShort: 'GL',
    enFull: 'Greenland',
    reg: 'GL|Greenland',
    enShortThree: 'GRL'
  },
  {
    zh: '危地马拉',
    enShort: 'GT',
    enFull: 'Guatemala',
    reg: 'GT|Guatemala',
    enShortThree: 'GTM'
  },
  {
    zh: '几内亚',
    enShort: 'GN',
    enFull: 'Guinea',
    reg: 'GN|Guinea',
    enShortThree: 'GIN'
  },
  {
    zh: '圭亚那',
    enShort: 'GY',
    enFull: 'Guyana',
    reg: 'GY|Guyana',
    enShortThree: 'GUY'
  },
  {
    zh: '海地',
    enShort: 'HT',
    enFull: 'Haiti',
    reg: 'HT|Haiti',
    enShortThree: 'HTI'
  },
  {
    zh: '洪都拉斯',
    enShort: 'HN',
    enFull: 'Honduras',
    reg: 'HN|Honduras',
    enShortThree: 'HND'
  },
  {
    zh: '匈牙利',
    enShort: 'HU',
    enFull: 'Hungary',
    reg: 'HU|Hungary|匈牙利|Hungary',
    flag: '🇭🇺',
    enShortThree: 'HUN'
  },
  {
    zh: '冰岛',
    enShort: 'IS',
    enFull: 'Iceland',
    reg: 'IS|Iceland|IS|ISL|冰岛|冰島',
    flag: '🇮🇸',
    enShortThree: 'ISL'
  },
  {
    zh: '孟买',
    enShort: 'Mumbai',
    enFull: 'Mumbai',
    reg: 'Mumbai|MFumbai|孟买',
    flag: '🇮🇳',
    enShortThree: 'IND'
  },
  {
    zh: '印度',
    enShort: 'IN',
    enFull: 'India',
    reg: 'IN|India|India|IND|INDIA|印度',
    flag: '🇮🇳',
    enShortThree: 'IND'
  },
  {
    zh: '印度尼西亚',
    enShort: 'ID',
    enFull: 'Indonesia',
    reg: 'ID|Indonesia|Indonesia|印尼|印度尼西亚|雅加达',
    flag: '🇮🇩',
    enShortThree: 'IDN'
  },
  {
    zh: '伊朗',
    enShort: 'IR',
    enFull: 'Iran',
    reg: 'IR|Iran|IR|伊朗',
    flag: '🇮🇷',
    enShortThree: 'IRN'
  },
  {
    zh: '伊拉克',
    enShort: 'IQ',
    enFull: 'Iraq',
    reg: 'IQ|Iraq',
    enShortThree: 'IRQ'
  },
  {
    zh: '爱尔兰',
    enShort: 'IE',
    enFull: 'Ireland',
    reg: 'Ireland|Ireland|IRELAND|爱尔兰|愛爾蘭|都柏林',
    flag: '🇮🇪',
    enShortThree: 'IRL'
  },
  {
    zh: '马恩岛',
    enShort: 'IM',
    enFull: 'Isle of Man',
    reg: 'IM|Isle of Man|马恩岛|馬恩島',
    flag: '🇮🇲',
    enShortThree: 'IMN'
  },
  {
    zh: '以色列',
    enShort: 'IL',
    enFull: 'Israel',
    reg: 'IL|Israel|Israel|以色列',
    flag: '🇮🇱',
    enShortThree: 'ISR'
  },
  {
    zh: '意大利',
    enShort: 'IT',
    enFull: 'Italy',
    reg: 'IT|Italy|Italy|IT|Nachash|意大利|米兰|義大利',
    flag: '🇮🇹',
    enShortThree: 'ITA'
  },
  {
    zh: '科特迪瓦',
    enShort: 'CI',
    enFull: 'Ivory Coast',
    reg: 'CI|Ivory Coast',
    enShortThree: 'CIV'
  },
  {
    zh: '牙买加',
    enShort: 'JM',
    enFull: 'Jamaica',
    reg: 'JM|Jamaica',
    enShortThree: 'JAM'
  },
  {
    zh: '约旦',
    enShort: 'JO',
    enFull: 'Jordan',
    reg: 'JO|Jordan|JO|约旦',
    flag: '🇯🇴',
    enShortThree: 'JOR'
  },
  {
    zh: '哈萨克斯坦',
    enShort: 'KZ',
    enFull: 'Kazakstan',
    reg: 'KZ|Kazakstan|哈萨克斯坦|哈萨克',
    flag: '🇰🇿',
    enShortThree: 'KAZ'
  },
  {
    zh: '肯尼亚',
    enShort: 'KE',
    enFull: 'Kenya',
    reg: 'KE|Kenya|KE|肯尼亚',
    flag: '🇰🇪',
    enShortThree: 'KEN'
  },
  {
    zh: '科威特',
    enShort: 'KW',
    enFull: 'Kuwait',
    reg: 'KW|Kuwait',
    enShortThree: 'KWT'
  },
  {
    zh: '吉尔吉斯斯坦',
    enShort: 'KG',
    enFull: 'Kyrgyzstan',
    reg: 'KG|Kyrgyzstan',
    flag: '🇰🇬',
    enShortThree: 'KGZ'
  },
  {
    zh: '老挝',
    enShort: 'LA',
    enFull: 'Laos',
    reg: 'LA|Laos',
    enShortThree: 'LAO'
  },
  {
    zh: '拉脱维亚',
    enShort: 'LV',
    enFull: 'Latvia',
    reg: 'LV|Latvia|Latvia|Latvija|拉脱维亚',
    flag: '🇱🇻',
    enShortThree: 'LVA'
  },
  {
    zh: '黎巴嫩',
    enShort: 'LB',
    enFull: 'Lebanon',
    reg: 'LB|Lebanon',
    enShortThree: 'LBN'
  },
  {
    zh: '莱索托',
    enShort: 'LS',
    enFull: 'Lesotho',
    reg: 'LS|Lesotho',
    enShortThree: 'LSO'
  },
  {
    zh: '利比里亚',
    enShort: 'LR',
    enFull: 'Liberia',
    reg: 'LR|Liberia',
    enShortThree: 'LBR'
  },
  {
    zh: '利比亚',
    enShort: 'LY',
    enFull: 'Libya',
    reg: 'LY|Libya',
    enShortThree: 'LBY'
  },
  {
    zh: '立陶宛',
    enShort: 'LT',
    enFull: 'Lithuania',
    reg: 'LT|Lithuania|LT|立陶宛',
    flag: '🇱🇹',
    enShortThree: 'LTU'
  },
  {
    zh: '卢森堡',
    enShort: 'LU',
    enFull: 'Luxembourg',
    reg: 'LU|Luxembourg|卢森堡',
    flag: '🇱🇺',
    enShortThree: 'LUX'
  },
  {
    zh: '马其顿',
    enShort: 'MK',
    enFull: 'Macedonia',
    reg: 'MK|Macedonia|马其顿|馬其頓',
    flag: '🇲🇰',
    enShortThree: 'MKD'
  },
  {
    zh: '马达加斯加',
    enShort: 'MG',
    enFull: 'Madagascar',
    reg: 'MG|Madagascar',
    enShortThree: 'MDG'
  },
  {
    zh: '马拉维',
    enShort: 'MW',
    enFull: 'Malawi',
    reg: 'MW|Malawi',
    enShortThree: 'MWI'
  },
  {
    zh: '马来西亚',
    enShort: 'MY',
    enFull: 'Malaysia',
    reg: 'MY|Malaysia|马来西亚',
    flag: '🇲🇾',
    enShortThree: 'MYS'
  },
  {
    zh: '马尔代夫',
    enShort: 'MV',
    enFull: 'Maldives',
    reg: 'MV|Maldives',
    enShortThree: 'MDV'
  },
  {
    zh: '马里',
    enShort: 'ML',
    enFull: 'Mali',
    reg: 'ML|Mali',
    enShortThree: 'MLI'
  },
  {
    zh: '马耳他',
    enShort: 'MT',
    enFull: 'Malta',
    reg: 'MT|Malta|马耳他',
    flag: '🇲🇹',
    enShortThree: 'MLT'
  },
  {
    zh: '毛利塔尼亚',
    enShort: 'MR',
    enFull: 'Mauritania',
    reg: 'MR|Mauritania',
    enShortThree: 'MRT'
  },
  {
    zh: '毛里求斯',
    enShort: 'MU',
    enFull: 'Mauritius',
    reg: 'MU|Mauritius',
    enShortThree: 'MUS'
  },
  {
    zh: '墨西哥',
    enShort: 'MX',
    enFull: 'Mexico',
    reg: 'MX|Mexico|MEX|MX|墨西哥',
    flag: '🇲🇽',
    enShortThree: 'MEX'
  },
  {
    zh: '摩尔多瓦',
    enShort: 'MD',
    enFull: 'Moldova',
    reg: 'MD|Moldova|摩爾多瓦|MD|摩尔多瓦',
    flag: '🇲🇩',
    enShortThree: 'MDA'
  },
  {
    zh: '摩纳哥',
    enShort: 'MC',
    enFull: 'Monaco',
    reg: 'MC|Monaco',
    enShortThree: 'MCO'
  },
  {
    zh: '蒙古',
    enShort: 'MN',
    enFull: 'Mongolia',
    reg: 'MN|Mongolia|蒙古',
    flag: '🇲🇳',
    enShortThree: 'MNG'
  },
  {
    zh: '黑山共和国',
    enShort: 'ME',
    enFull: 'Montenegro',
    reg: 'ME|Montenegro',
    enShortThree: 'MNE'
  },
  {
    zh: '摩洛哥',
    enShort: 'MA',
    enFull: 'Morocco',
    reg: 'MA|Morocco|MA|摩洛哥',
    flag: '🇲🇦',
    enShortThree: 'MAR'
  },
  {
    zh: '莫桑比克',
    enShort: 'MZ',
    enFull: 'Mozambique',
    reg: 'MZ|Mozambique',
    enShortThree: 'MOZ'
  },
  {
    zh: '缅甸',
    enShort: 'MM',
    enFull: 'Myanmar(Burma)',
    reg: 'MM|Myanmar(Burma)',
    flag: '🇲🇲',
    enShortThree: 'MMR'
  },
  {
    zh: '纳米比亚',
    enShort: 'NA',
    enFull: 'Namibia',
    reg: 'NA|Namibia',
    enShortThree: 'NAM'
  },
  {
    zh: '尼泊尔',
    enShort: 'NP',
    enFull: 'Nepal',
    reg: 'NP|Nepal|尼泊尔',
    flag: '🇳🇵',
    enShortThree: 'NPL'
  },
  {
    zh: '新西兰',
    enShort: 'NZ',
    enFull: 'New Zealand',
    reg: 'NZ|New Zealand|新西蘭|新西兰',
    flag: '🇳🇿',
    enShortThree: 'NZL'
  },
  {
    zh: '尼加拉瓜',
    enShort: 'NI',
    enFull: 'Nicaragua',
    reg: 'NI|Nicaragua',
    enShortThree: 'NIC'
  },
  {
    zh: '尼日尔',
    enShort: 'NE',
    enFull: 'Niger',
    reg: 'NE|Niger',
    enShortThree: 'NER'
  },
  {
    zh: '尼日利亚',
    enShort: 'NG',
    enFull: 'Nigeria',
    reg: 'NG|Nigeria|尼日利亚|NG|尼日利亞|拉各斯',
    flag: '🇳🇬',
    enShortThree: 'NGA'
  },
  {
    zh: '朝鲜',
    enShort: 'KP',
    enFull: 'North Korea',
    reg: 'KP|North Korea|KP|朝鲜',
    flag: '🇰🇵',
    enShortThree: 'PRK'
  },
  {
    zh: '挪威',
    enShort: 'NO',
    enFull: 'Norway',
    reg: 'NO|Norway|Norway|挪威|NO',
    flag: '🇳🇴',
    enShortThree: 'NOR'
  },
  {
    zh: '阿曼',
    enShort: 'OM',
    enFull: 'Oman',
    reg: 'OM|Oman',
    enShortThree: 'OMN'
  },
  {
    zh: '巴基斯坦',
    enShort: 'PK',
    enFull: 'Pakistan',
    reg: 'PK|Pakistan|巴基斯坦',
    flag: '🇵🇰',
    enShortThree: 'PAK'
  },
  {
    zh: '巴拿马',
    enShort: 'PA',
    enFull: 'Panama',
    reg: 'PA|Panama|PA|巴拿马',
    flag: '🇵🇦',
    enShortThree: 'PAN'
  },
  {
    zh: '巴拉圭',
    enShort: 'PY',
    enFull: 'Paraguay',
    reg: 'PY|Paraguay',
    enShortThree: 'PRY'
  },
  {
    zh: '秘鲁',
    enShort: 'PE',
    enFull: 'Peru',
    reg: 'PE|Peru|秘鲁|祕魯',
    flag: '🇵🇪',
    enShortThree: 'PER'
  },
  {
    zh: '菲律宾',
    enShort: 'PH',
    enFull: 'Philippines',
    reg: 'PH|Philippines|PH|Philippines|菲律宾|菲律賓',
    flag: '🇵🇭',
    enShortThree: 'PHL'
  },
  {
    zh: '波兰',
    enShort: 'PL',
    enFull: 'Poland',
    reg: 'Poland|POL|波兰|波蘭',
    flag: '🇵🇱',
    enShortThree: 'POL'
  },
  {
    zh: '葡萄牙',
    enShort: 'PT',
    enFull: 'Portugal',
    reg: 'PT|Portugal|葡萄牙',
    flag: '🇵🇹',
    enShortThree: 'PRT'
  },
  {
    zh: '波多黎各',
    enShort: 'PR',
    enFull: 'Puerto Rico',
    reg: 'PR|Puerto Rico|PR|波多黎各',
    flag: '🇵🇷',
    enShortThree: 'PRI'
  },
  {
    zh: '卡塔尔',
    enShort: 'QA',
    enFull: 'Qatar',
    reg: 'QA|Qatar',
    enShortThree: 'QAT'
  },
  {
    zh: '留尼旺',
    enShort: 'RE',
    enFull: 'Reunion',
    reg: 'RE|Reunion',
    enShortThree: 'REU'
  },
  {
    zh: '罗马尼亚',
    enShort: 'RO',
    enFull: 'Romania',
    reg: 'RO|Romania|RO|罗马尼亚',
    flag: '🇷🇴',
    enShortThree: 'ROU'
  },
  {
    zh: '白俄罗斯',
    enShort: 'BY',
    enFull: 'Belarus',
    reg: 'BY|Belarus|BY|白俄|白俄罗斯',
    flag: '🇧🇾',
    enShortThree: 'BLR'
  },
  {
    zh: '俄罗斯',
    enShort: 'RU',
    enFull: 'Russia',
    reg: 'RU|Russia|RU|Russia|俄罗斯|俄国|俄羅斯|伯力|莫斯科|圣彼得堡|西伯利亚|新西伯利亚|京俄|杭俄|廣俄|滬俄|广俄|沪俄|Moscow',
    flag: '🇷🇺',
    enShortThree: 'RUS'
  },
  {
    zh: '卢旺达',
    enShort: 'RW',
    enFull: 'Rwanda',
    reg: 'RW|Rwanda',
    enShortThree: 'RWA'
  },
  {
    zh: '圣马力诺',
    enShort: 'SM',
    enFull: 'San Marino',
    reg: 'SM|San Marino',
    enShortThree: 'SMR'
  },
  {
    zh: '沙特阿拉伯',
    enShort: 'SA',
    enFull: 'Saudi Arabia',
    reg: 'SA|Saudi Arabia',
    flag: '🇸🇦',
    enShortThree: 'SAU'
  },
  {
    zh: '塞内加尔',
    enShort: 'SN',
    enFull: 'Senegal',
    reg: 'SN|Senegal',
    enShortThree: 'SEN'
  },
  {
    zh: '塞尔维亚',
    enShort: 'RS',
    enFull: 'Serbia',
    reg: 'RS|Serbia|RS|塞尔维亚',
    flag: '🇷🇸',
    enShortThree: 'SRB'
  },
  {
    zh: '塞拉利昂',
    enShort: 'SL',
    enFull: 'Sierra Leone',
    reg: 'SL|Sierra Leone',
    enShortThree: 'SLE'
  },
  {
    zh: '斯洛伐克',
    enShort: 'SK',
    enFull: 'Slovakia',
    reg: 'SK|Slovakia|斯洛伐克|SK',
    flag: '🇸🇰',
    enShortThree: 'SVK'
  },
  {
    zh: '斯洛文尼亚',
    enShort: 'SI',
    enFull: 'Slovenia',
    reg: 'SI|Slovenia|SI|斯洛文尼亚',
    flag: '🇸🇮',
    enShortThree: 'SVN'
  },
  {
    zh: '索马里',
    enShort: 'SO',
    enFull: 'Somalia',
    reg: 'SO|Somalia',
    enShortThree: 'SOM'
  },
  {
    zh: '南非',
    enShort: 'ZA',
    enFull: 'South Africa',
    reg: 'ZA|South Africa|South Africa|南非',
    flag: '🇿🇦',
    enShortThree: 'ZAF'
  },
  {
    zh: '西班牙',
    enShort: 'ES',
    enFull: 'Spain',
    reg: 'ES|Spain|ES|西班牙|Spain',
    flag: '🇪🇸',
    enShortThree: 'ESP'
  },
  {
    zh: '斯里兰卡',
    enShort: 'LK',
    enFull: 'Sri Lanka',
    reg: 'LK|Sri Lanka',
    enShortThree: 'LKA'
  },
  {
    zh: '苏丹',
    enShort: 'SD',
    enFull: 'Sudan',
    reg: 'SD|Sudan',
    enShortThree: 'SDN'
  },
  {
    zh: '苏里南',
    enShort: 'SR',
    enFull: 'Suriname',
    reg: 'SR|Suriname',
    enShortThree: 'SUR'
  },
  {
    zh: '斯威士兰',
    enShort: 'SZ',
    enFull: 'Swaziland',
    reg: 'SZ|Swaziland',
    enShortThree: 'SWZ'
  },
  {
    zh: '瑞典',
    enShort: 'SE',
    enFull: 'Sweden',
    reg: 'SE|Sweden|SE|Sweden|瑞典',
    flag: '🇸🇪',
    enShortThree: 'SWE'
  },
  {
    zh: '苏黎世',
    enShort: 'Zurich',
    enFull: 'Zurich',
    reg: 'Zurich|Zurich|瑞士|苏黎世|Switzerland|Zurich',
    flag: '🇨🇭',
    enShortThree: 'CHE'
  },
  {
    zh: '瑞士',
    enShort: 'CH',
    enFull: 'Switzerland',
    reg: 'CH|Switzerland|瑞士|苏黎世|Switzerland|Zurich',
    flag: '🇨🇭',
    enShortThree: 'CHE'
  },
  {
    zh: '叙利亚',
    enShort: 'SY',
    enFull: 'Syria',
    reg: 'SY|Syria',
    enShortThree: 'SYR'
  },
  {
    zh: '塔吉克斯坦',
    enShort: 'TJ',
    enFull: 'Tajikstan',
    reg: 'TJ|Tajikstan',
    enShortThree: 'TJK'
  },
  {
    zh: '坦桑尼亚',
    enShort: 'TZ',
    enFull: 'Tanzania',
    reg: 'TZ|Tanzania',
    enShortThree: 'TZA'
  },
  {
    zh: '泰国',
    enShort: 'TH',
    enFull: 'Thailand',
    reg: 'TH|Thailand|TH|Thailand|泰国|泰國|曼谷',
    flag: '🇹🇭',
    enShortThree: 'THA'
  },
  {
    zh: '多哥',
    enShort: 'TG',
    enFull: 'Togo',
    reg: 'TG|Togo',
    enShortThree: 'TGO'
  },
  {
    zh: '汤加',
    enShort: 'TO',
    enFull: 'Tonga',
    reg: 'TO|Tonga',
    enShortThree: 'TON'
  },
  {
    zh: '特立尼达和多巴哥',
    enShort: 'TT',
    enFull: 'Trinidad and Tobago',
    reg: 'TT|Trinidad and Tobago',
    enShortThree: 'TTO'
  },
  {
    zh: '突尼斯',
    enShort: 'TN',
    enFull: 'Tunisia',
    reg: 'TN|Tunisia|TN|突尼斯',
    flag: '🇹🇳',
    enShortThree: 'TUN'
  },
  {
    zh: '土耳其',
    enShort: 'TR',
    enFull: 'Turkey',
    reg: 'TR|Turkey|TR|Turkey|土耳其|伊斯坦布尔',
    flag: '🇹🇷',
    enShortThree: 'TUR'
  },
  {
    zh: '土库曼斯坦',
    enShort: 'TM',
    enFull: 'Turkmenistan',
    reg: 'TM|Turkmenistan',
    enShortThree: 'TKM'
  },
  {
    zh: '美属维尔京群岛',
    enShort: 'VI',
    enFull: 'U.S. Virgin Islands',
    reg: 'VI|U.S. Virgin Islands',
    enShortThree: 'VIR'
  },
  {
    zh: '乌干达',
    enShort: 'UG',
    enFull: 'Uganda',
    reg: 'UG|Uganda',
    enShortThree: 'UGA'
  },
  {
    zh: '乌克兰',
    enShort: 'UA',
    enFull: 'Ukraine',
    reg: 'UA|Ukraine|烏克蘭|乌克兰',
    flag: '🇺🇦',
    enShortThree: 'UKR'
  },
  {
    zh: '阿联酋',
    enShort: 'AE',
    enFull: 'United Arab Emirates',
    reg: 'AE|United Arab Emirates|United Arab Emirates|阿联酋|迪拜|阿联酉|阿拉伯联合酋长国',
    flag: '🇦🇪',
    enShortThree: 'ARE'
  },
  {
    zh: '乌拉圭',
    enShort: 'UY',
    enFull: 'Uruguay',
    reg: 'UY|Uruguay|UY|乌拉圭',
    flag: '🇺🇾',
    enShortThree: 'URY'
  },
  {
    zh: '乌兹别克斯坦',
    enShort: 'UZ',
    enFull: 'Uzbekistan',
    reg: 'UZ|Uzbekistan',
    enShortThree: 'UZB'
  },
  {
    zh: '梵蒂冈城',
    enShort: 'VA',
    enFull: 'Vatican City',
    reg: 'VA|Vatican City',
    enShortThree: 'VAT'
  },
  {
    zh: '委内瑞拉',
    enShort: 'VE',
    enFull: 'Venezuela',
    reg: 'VE|Venezuela|VE|委内瑞拉',
    flag: '🇻🇪',
    enShortThree: 'VEN'
  },
  {
    zh: '越南',
    enShort: 'VN',
    enFull: 'Vietnam',
    reg: 'VN|Vietnam|VN|越南|胡志明市',
    flag: '🇻🇳',
    enShortThree: 'VNM'
  },
  {
    zh: '也门',
    enShort: 'YE',
    enFull: 'Yemen',
    reg: 'YE|Yemen',
    flag: '🇾🇪',
    enShortThree: 'YEM'
  },
  {
    zh: '南斯拉夫',
    enShort: 'YU',
    enFull: 'Yugoslavia',
    reg: 'YU|Yugoslavia',
    enShortThree: ''
  },
  {
    zh: '扎伊尔',
    enShort: 'ZR',
    enFull: 'Zaire',
    reg: 'ZR|Zaire',
    enShortThree: ''
  },
  {
    zh: '赞比亚',
    enShort: 'ZM',
    enFull: 'Zambia',
    reg: 'ZM|Zambia',
    enShortThree: 'ZMB'
  },
  {
    zh: '津巴布韦',
    enShort: 'ZW',
    enFull: 'Zimbabwe',
    reg: 'ZW|Zimbabwe',
    enShortThree: 'ZWE'
  },
  {
    zh: '孟加拉国',
    enShort: 'BD',
    enFull: 'Bangladesh',
    reg: 'BD|Bangladesh|BD|孟加拉',
    flag: '🇧🇩',
    enShortThree: 'BGD'
  }
]

const modifiedList: ModifiedList[] = [
  {
    zh: '实验',
    enShort: 'EXP',
    enFull: 'EXP',
    custom: 'EXP',
    reg: '实验',
    action: 'rename'
  },
  {
    zh: '标准',
    enShort: 'STD',
    enFull: 'STD',
    custom: 'STD',
    reg: '标准',
    action: 'rename'
  },
  {
    zh: '高级',
    enShort: 'PRO',
    enFull: 'PRO',
    custom: 'PRO',
    reg: '高级',
    action: 'rename'
  },
  {
    zh: '购物',
    enShort: 'Shop',
    enFull: 'Shoping',
    custom: 'Shop',
    reg: '购物',
    action: 'rename'
  },
  {
    zh: 'Premium',
    enShort: 'Pre',
    enFull: 'Premium',
    custom: 'Premium',
    reg: 'Premium',
    action: 'rename'
  },
  {
    zh: '直连',
    enShort: 'Direct',
    enFull: 'Direct',
    custom: 'Direct',
    reg: '直连',
    action: 'rename'
  },
  {
    zh: '沪日',
    enShort: 'SH',
    enFull: 'SH-Japan',
    custom: 'Shanghai',
    reg: '沪日',
    action: 'rename'
  },
  {
    zh: '沪韩',
    enShort: 'SH',
    enFull: 'SH-Korea',
    custom: 'Shanghai',
    reg: '沪韩',
    action: 'rename'
  },
  {
    zh: '沪美',
    enShort: 'SH',
    enFull: 'SH-United States',
    custom: 'Shanghai',
    reg: '沪美',
    action: 'rename'
  },
  {
    zh: '广港',
    enShort: 'GZ',
    enFull: 'GZ-Hong Kong',
    custom: 'Guang',
    reg: '广港',
    action: 'rename'
  },
  {
    zh: '广新',
    enShort: 'GZ',
    enFull: 'GZ-Singapore',
    custom: 'Guang',
    reg: '广新',
    action: 'rename'
  },
  {
    zh: '深港',
    enShort: 'SZ',
    enFull: 'SZ-Hong Kong',
    custom: 'Shen',
    reg: '深港',
    action: 'rename'
  },
  {
    zh: '莞港',
    enShort: 'DG',
    enFull: 'DG-Hong Kong',
    custom: 'Wan',
    reg: '莞港',
    action: 'rename'
  },
  {
    zh: '负载均衡',
    enShort: 'LB',
    enFull: 'Load Balanced',
    custom: 'LB',
    reg: 'Load Balanced|LB',
    action: 'rename'
  },
  {
    zh: '专线',
    enShort: 'Spec',
    enFull: 'Spec',
    custom: 'Spec',
    reg: '专线|IPLC',
    action: 'rename'
  },
  {
    zh: '核心',
    enShort: 'Kern',
    enFull: 'Kern',
    custom: 'Kern',
    reg: '核心',
    action: 'rename'
  },
  {
    zh: '边缘',
    enShort: 'Edge',
    enFull: 'Edge',
    custom: 'Edge',
    reg: '边缘',
    action: 'rename'
  },

  {
    zh: '商宽',
    enShort: 'BIZ',
    enFull: 'BIZ',
    custom: 'BIZ',
    reg: '商宽',
    action: 'rename'
  },
  {
    zh: '家宽',
    enShort: 'FAM',
    enFull: 'FAM',
    custom: 'FAM',
    reg: '家宽',
    action: 'rename'
  },
  {
    zh: '流媒体',
    enShort: 'Stream',
    enFull: 'Stream',
    custom: 'Stream',
    reg: 'stream|懒人',
    action: 'rename'
  }
]
export const deleteList: DeleteList[] = [
  {
    zh: '无用节点',
    enFull: '',
    enShort: '',
    reg: '过期|流量|时间|应急|expire|traffic|更新|测速|官网|http'
  }
]

export const actionObject: ActionObject = {
  locationList,
  modifiedList,
  deleteList
}
