"use strict";
(() => {
    const fullName = (firsName, lastName) => {
        return `${firsName} ${lastName || 'no lastname'}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
