export function response(res: any, code: number, body: any): void {
    const date: string = new Date().toTimeString();
    res.status(code).send({
        'x-date': date,
        body: body,
    });
}
