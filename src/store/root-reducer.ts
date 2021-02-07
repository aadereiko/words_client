import { wordsSetReducer as wordsSet, IWordsSetState } from './wordsSet/slice';
import { userReducer as user, IUserState } from './user/slice';
import { appReducer as app, IAppState } from './app/slice';

export interface IStore {
    user: IUserState;
    wordsSet: IWordsSetState;
    app: IAppState;
}

export default { user, wordsSet, app };