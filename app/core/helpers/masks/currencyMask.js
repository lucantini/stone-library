// @ flow
import _ from 'lodash';

import numeral from '../numeral';

export default {
	mount: (value: number): string => numeral(parseFloat(value.toFixed(2))).format('$ 0,0.00'),

	/**
	 * Remove mask from field and returns a string value
	 * Split used to remove '$' from mask to returns string
	 * because if returns number, when value is '0.10' for example
	 * the conversion remove zeros from ending and its break mask
	 * @param {String} value
	 */
	unmount: (value: string): string => {
		const newValue: any = _.isUndefined(value.split(' ')[1]) ? value : value.split(' ')[1];
		const comparedValue = numeral(newValue).value();
		if (!comparedValue) return '';
		return newValue;
	},
};
