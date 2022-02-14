import Head from "next/head";
import {MongoClient} from "mongodb";

import StreetList from "../components/streets/StreetList";
import {Fragment} from "react";
import {mongoUrl} from "../config";


function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Stockholm Streets</title>
                <meta name="description"
                      content="Browse a huge list of Stockholm streets"
                />
            </Head>
            <StreetList streets={props.streets}/>
        </Fragment>
    )

}

// export  async function getServerSideProps(context){
//     //when your data get changed very frequently
//     const req = context.req;
//     const res = context.res;
//
//     return{
//         props:{
//             streets:Dummy
//         }
//     };
// }

export async function getStaticProps() {

    const client = await MongoClient.connect(mongoUrl)
    const db = client.db();

    const streetsCollection = db.collection('streets');

    const streets = await streetsCollection.find().toArray();

    client.close();

    return {
        props: {
            streets: streets.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    }
}

export default HomePage;
