export default async function (req: any, res: any) {
    try {
        const data = [
            { type: 'Car', value: 27 },
            { type: 'Bike', value: 25 },
            { type: 'Bus', value: 18 },
            { type: 'Cycle', value: 15 },
        ]
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
