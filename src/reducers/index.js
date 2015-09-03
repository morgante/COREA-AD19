import { combineReducers } from 'redux';
import blog from './blog';
import life from './life';

const rootReducer = combineReducers({
	blog,
	life
});

export default rootReducer;
