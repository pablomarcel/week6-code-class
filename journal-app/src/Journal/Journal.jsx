import React, {useEffect, useState} from 'react';

import { collection, getDocs, onSnapshot } from "firebase/firestore";

import db from '../db'
import {Link} from "react-router-dom";

export default function Journal() {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError]=useState(false)

    useEffect(()=>{
        // getDocs(
        //     collection(db,'journalEntries')
        // ).then(
        //     snapshot=>{
        //
        //         // console.log(snapshot.map(doc=>doc.id))
        //         setEntries(snapshot.docs)
        //         setLoading(false)
        //         // snapshot.forEach(doc=>{
        //         //     console.log(
        //         //         doc.id,doc.data()
        //         //     )
        //         // })
        //     },
        //     reason => {
        //         setError(true)
        //         setLoading(false)
        //
        //     }
        // )

        onSnapshot(
            collection(db,'journalEntries'),
            snapshot => {
                setEntries(snapshot.docs)
                setLoading(false)
            },
            reason=>{
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
                        <p>{entry.data().entry}</p>
                        <span>
                            <Link to={`/journal/${entry.id}`}>View</Link>>
                        </span>
                        <hr />
                    </div>
                )
            })

            }
        </div>
    );
}
