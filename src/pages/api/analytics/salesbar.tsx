export default async function (req: any, res: any) {
    try {
         const data = [
            { labelName: 'Car', value: 27 },
            { labelName: 'Bike', value: 25 },
            { labelName: 'Bus', value: 20 },
            { labelName: 'Cycle', value: 15 },
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
