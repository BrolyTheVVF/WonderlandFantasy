var locale = {};
var __DEFAULT_LOCALE = "en";

function LC_TEXT(l, k){
	if(!locale || !locale.hasOwnProperty(k)){
		return k;
	}
	if(!locale[k] || !locale[k].hasOwnProperty(l)){
		if(locale[k] && locale[k].hasOwnProperty(__DEFAULT_LOCALE)){
			return locale[k][__DEFAULT_LOCALE];
		}
		return k;
	}
	return locale[k][l];
}
