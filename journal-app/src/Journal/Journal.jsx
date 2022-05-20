import React, {useEffect, useState} from 'react';

import { collection, getDocs } from "firebase/firestore";

import db from '../db'

export default function Journal() {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError]=useState(false)

    useEffect(()=>{
        getDocs(
            collection(db,'journalEntries')
        ).then(
            snapshot=>{

                // console.log(snapshot.map(doc=>doc.id))
                setEntries(snapshot.docs)
                setLoading(false)
                // snapshot.forEach(doc=>{
                //     console.log(
                //         doc.id,doc.data()
                //     )
                // })
            },
            reason => {
                setError(true)
                setLoading(false)

            }
        )
    }, [])

    if (error){
        return <p>An error occurred, please try again</p>
    }

    if (loading){
        return <p>Loading...</p>
    }


    return (
        <div>
            <h1>Journal</h1>
            {entries.map(entry=>{
                return(
                    <div key={entry.id}>
                        {entry.data().entry}
                        <hr />
                    </div>
                )
            })

            }
        </div>
    );
}
