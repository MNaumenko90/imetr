
export const SIGNUP = 'user:signup';
export const LOGIN = 'user:login';
export const LOGOUT = 'user:logout';
export const CURRENT = 'user:current';

export const ERROR_USER_ADD = 'user:error:add';
export const ERROR_USER_RM = 'user:error:rm';
export const ERROR_USER_RESET = 'user:error:reset';
export const ACTION_ERRORS = [
    {
        // Invalid username/password.
        code: 101,
        property: 'username',
        message: 'Неверный логин/пароль'
    },
    {
        // "Account already exists for this username."
        code: 202,
        property: 'username',
        message: 'Такой логин уже зарегистрирован в системе'
    },
    {
        // "Password does not meet the Password Policy requirements."
        code: 142,
        property: 'password',
        message: 'длина пароля не менее 8 символов, но не более 16 символов',
    },
    {
        // "User email is not verified."
        code: 205,
        property: 'username',
        message: 'Требуется подтверждение email, указанного при регистрации',
    },
    {
        // "email already verified"
        code: "EEMAILVERIFIED",
        property: 'email',
        message: 'Email уже подтвержден',
    },
    {
        // "email not found"
        code: "EEMAILNF",
        property: 'email',
        message: 'Email не найден',
    },

];
