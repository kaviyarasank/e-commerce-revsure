export default async function (req: any, res: any) {
    try {
        const data = [
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },
            { name: 'John Doe purchased Product X' },

        ];
        return res.send({
            data: data,
            message: "data fetched successfully",
            status: true
        });
    } catch (error) {
        res.send({
            message: error,
            status: false
        });
    }
}
