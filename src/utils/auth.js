const AUTH_KEY = "isAuthenticated";
const USER_KEY = "user";

export const login = (email, password) => {
    if (
        email === 'somahalder171@gmail.com' &&
        password === 'admin123'
    ) {
        localStorage.setItem(AUTH_KEY, "true");
        localStorage.setItem(USER_KEY, JSON.stringify({
            name: "Admin",
            email: "somahalder171@gmail.com"
        }));
        return true;
    }
    return false;
};

export const getUser = () => (
    JSON.parse(localStorage.getItem(USER_KEY))
);

export const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY)
    localStorage.removeItem(name);
};

export const isAuthenticated = () => { 
    return localStorage.getItem(AUTH_KEY) === 'true';
}