"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
function response(res, code, body) {
    const date = new Date().toTimeString();
    res.status(code).send({
        'x-date': date,
        body: body,
    });
}
exports.response = response;
