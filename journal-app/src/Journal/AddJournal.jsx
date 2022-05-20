import React, {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import db from "../db";

export default function AddJournal(){
    const [entry, setEntry] = useState('')

    // const submitFormm = (e) =>{
    //     e.preventDefault()
    //     const entriesRef = collection(db, 'journalEntries')
    //     addDoc(entriesRef, {
    //         entry
    //
    //     }).then(()=>setEntry(''))
    //
    // }

    const submitFormm = (e) =>{
        e.preventDefault()
        setEntry('')
        const entriesRef = collection(db, 'journalEntries')
        addDoc(entriesRef, {
            entry

        })

    }


    return(
        <div>
            <h2>Add Journal</h2>
            <form onSubmit={submitFormm}>
                <label htmlFor="entry-input">Entry</label>
                <textarea
                    id="entry-input"
                    value={entry}
                    onChange={e=>setEntry(e.target.value)}

                />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
