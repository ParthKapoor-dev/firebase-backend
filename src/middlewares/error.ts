import { NextFunction, Request, Response } from "express";

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).json({
        reason: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : '🥞'
    });
}
