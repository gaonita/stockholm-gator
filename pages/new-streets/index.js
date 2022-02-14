import NewStreetForm from "../../components/streets/NewStreetForm";
import {Fragment} from "react";
import Head from "next/head";
import {useRouter} from "next/router";

function NewStreetPage() {
    const router = useRouter();
    async function addStreetHandler(enteredData) {
        const response = await fetch('/api/new-street', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();

        await router.push('/')
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Street</title>
                <meta name="description"
                      content="Add your own streets to the list of Stockholm streets"
                />
            </Head>
            <NewStreetForm onAddMeetup={addStreetHandler}/>
        </Fragment>
    )
}

export default NewStreetPage;
