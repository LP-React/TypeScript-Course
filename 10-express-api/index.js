var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("index", ["require", "exports", "express"], function (require, exports, express_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    express_1 = __importDefault(express_1);
    const app = (0, express_1.default)();
    const port = 3000;
    app.get('/', (req, res) => {
        res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
        res.json({
            ok: true,
            msg: 'Todo salio bien'
        });
    });
    app.listen();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
