const затримка = (мс) => new Promise((рез) => setTimeout(рез, мс));

const виконати = async () => {
    try {
        const користувач = await new Promise((рез) => setTimeout(() => рез({}), 1000));
        console.log("отримати користувача з БД");

        const парольВірний = await new Promise((рез) => setTimeout(() => рез(true), 1000));
        console.log("перевірити хеш пароля");

        const токенАвторизації = await new Promise((рез) => setTimeout(() => рез("токен123"), 1000));
        console.log("повернути токен авторизації");

        console.log("Токен авторизації:", токенАвторизації);
    } catch (помилка) {
        console.error(помилка);
    } finally {
        console.log("Це кінець сценарію");
    }
};

виконати();
