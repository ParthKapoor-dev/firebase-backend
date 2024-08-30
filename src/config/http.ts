import { Request, Response } from "express";

export enum HttpCodes {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
}

export class HttpError extends Error {
    statusCode: HttpCodes;
    stack: string | undefined;

    constructor(statusCode: HttpCodes, message: string, stack?: string) {
        super(message);
        this.statusCode = statusCode;
        this.stack = stack ?? new Error().stack 
    }
}

export const getToken = (req: Request): string | undefined => {
    return req.headers["x-firebase-token"]?.toString();
};

export const respond = (res: Response, statusCode: number, message: string, data?: any)=> {
    res.status(statusCode).json({ message, data });
};
