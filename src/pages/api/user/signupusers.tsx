export default async function (req: any, res: any) {
    try {
        const data = [
            { month: 'January', value: 100 },
            { month: 'February', value: 120 },
            { month: 'March', value: 130 },
            { month: 'April', value: 115 },
            { month: 'May', value: 170 },
            { month: 'June', value: 160 },
            { month: 'July', value: 100 },
            { month: 'August', value: 200 },
            { month: 'September', value: 112 },
            { month: 'October', value: 114 },
            { month: 'November', value: 134 },
            { month: 'December', value: 133 },

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
