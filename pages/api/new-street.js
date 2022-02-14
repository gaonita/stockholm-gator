// /api/new-streets
import {MongoClient} from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://user:pass@cluster0.pcv5a.mongodb.net/streets?retryWrites=true&w=majority')
        const db = client.db();

        const streetsCollection = db.collection('streets');

        const result = await streetsCollection.insertOne(data);

        client.close();

        res.status(201).json({message:'Street inserted!'});
    }
}

export default handler;
