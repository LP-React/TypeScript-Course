"use strict";
(() => {
    const fullName = (firsName, lastName, upper = false) => {
        return upper
            ? `${firsName} ${lastName || "No lastname"}`.toUpperCase()
            : `${firsName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
