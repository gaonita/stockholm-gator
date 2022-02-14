import {MongoClient, ObjectId} from "mongodb";
import StreetDetail from "../../components/streets/StreetDetail";
import {Fragment} from "react";
import Head from "next/head";
import {mongoUrl} from "../../config";

function StreetDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.streetData.title}</title>
            </Head>
            <StreetDetail
                title={props.streetData.title}
                image={props.streetData.image}
                address={props.streetData.address}
                description={props.streetData.description}
            />
        </Fragment>
    )
}



export async function getStaticPaths() {
    const client = await MongoClient.connect(mongoUrl)
    const db = client.db();
    const streetCollection = db.collection('streets');
    const streets = await streetCollection.find({}, {_id: 1}).toArray();
    return {
        fallback: false,
        paths: streets.map(street => ({params: {streetId: street._id.toString()}}))
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup
    //runs when it builds! therefore log only on the terminal

    const streetId = context.params.streetId
    const client = await MongoClient.connect(mongoUrl)
    const db = client.db();

    const streetCollection = db.collection('streets');

    const selectedStreet = await streetCollection.findOne({
        _id: ObjectId(streetId)
    })

    client.close();
    return {
        props: {
            streetData: {
                id: selectedStreet._id.toString(),
                title: selectedStreet.title,
                address: selectedStreet.address,
                image: selectedStreet.image,
                description: selectedStreet.description
            },
        },
    }
}

export default StreetDetails;
