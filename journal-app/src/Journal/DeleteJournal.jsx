import React, {useState} from "react";
// import {addDoc, collection} from "firebase/firestore";
import db from "../db";
import { doc, deleteDoc } from "firebase/firestore";

export default function DeleteJournal(){

    const deleteJournal = async (id)=>{

        // await deleteDoc(doc(db, ))
        // const entriesRef = collection(db, 'journalEntries')
        await deleteDoc(doc(db, 'journalEntries', id));

    }

    return(
        <div>
            {/*<button onClick={()=>deleteJournal(entry.id)}>Delete</button>*/}
            {/*<h2>Add Journal</h2>*/}
            {/*<form onSubmit={submitFormm}>*/}
            {/*    <label htmlFor="entry-input">Entry</label>*/}
            {/*    <textarea*/}
            {/*        id="entry-input"*/}
            {/*        value={entry}*/}
            {/*        onChange={e=>setEntry(e.target.value)}*/}

            {/*    />*/}
            {/*    <button type="submit">Submit</button>*/}

            {/*</form>*/}
        </div>
    )

}
