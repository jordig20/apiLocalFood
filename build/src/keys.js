"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = void 0;
exports.mongodb = {
    'URI': 'mongodb://localhost/localFood',
};
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: 'localhost:3000',
                    credentials: true,
                },
            ],
        },
    },
};
