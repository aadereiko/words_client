const TOKEN_KEY = "WORDS_TOKEN";

export const setToken = (token: string) => {
    window.localStorage.setItem(TOKEN_KEY, token);
}

export const getToken = (): string | null => window.localStorage.getItem(TOKEN_KEY);

export const removeToken = (): void =>
    window.localStorage.removeItem(TOKEN_KEY);
