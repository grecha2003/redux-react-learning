import { ADD_COMMENT } from './types';
import { errorOn } from './actions';

const badWords = ['fuck', 'shit', 'asshole', 'bitch'];

export function spamFilter(store) {
	return function (next) {
		return function (action) {
			if (action.type === ADD_COMMENT) {
				console.log('spamFilter', action);
				const hasBadWord = badWords.some((res) => action.data.text.includes(res));
				if (hasBadWord) {
					store.dispatch(errorOn('Уважайте человека и не используйте не приличные слова'));
					return;
				}
			}
			return next(action);
		};
	};
}
