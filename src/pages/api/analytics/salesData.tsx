export default async function (req: any, res: any) {
    try {
        const data = [
            { month: 'January', value: 100 },
            { month: 'February', value: 120 },
            { month: 'March', value: 130 },
            { month: 'April', value: 145 },
            { month: 'May', value: 150 },
            { month: 'June', value: 160 },
            { month: 'July', value: 170 },
            { month: 'August', value: 180 },
            { month: 'September', value: 192 },
            { month: 'October', value: 200 },
            { month: 'November', value: 234 },
            { month: 'December', value: 233 },

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
