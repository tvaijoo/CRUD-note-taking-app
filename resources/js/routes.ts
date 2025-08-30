// ========== API routes (JWT) ==========
export const authRegisterApi = () => ({
    url: '/api/auth/register',
    method: 'post',
});

export const authLoginApi = () => ({
    url: '/api/auth/login',
    method: 'post',
});

export const authLogoutApi = () => ({
    url: '/api/auth/logout',
    method: 'post',
});

export const authMeApi = () => ({
    url: '/api/auth/me',
    method: 'post',
});

export const authRefreshApi = () => ({
    url: '/api/auth/refresh',
    method: 'post',
});

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface Route {
  url: string;
  method?: HttpMethod;
}

// ========== Web routes ==========
export const register = () => ({
    url: '/register',
    method: 'get',
});

export const login = () => ({
    url: '/login',
    method: 'get',
});

export const logout = () => ({
    url: '/logout',
    method: 'post',
});

export const home = () => ({
    url: '/',
    method: 'get',
});

export const dashboard = () => ({
    url: '/dashboard',
    method: 'get',
});

export const note = {
    index: () => ({ url: '/note', method: 'get' }),
    create: () => ({ url: '/note/create', method: 'get' }),
    store: () => ({ url: '/note', method: 'post' }),
    edit: () => ({ url: '/note/{note}/edit', method: 'get' }),
    update: () => ({ url: '/note/{note}', method: 'post' }),
    destroy: () => ({ url: '/note/{note}', method: 'delete' }),
    search: () => ({ url: '/note/search', method: 'get' }),
};

export const searchNotes = () => ({ url: '/search/notes', method: 'get' });

export const appearance = () => ({ url: '/settings/appearance', method: 'get' });
