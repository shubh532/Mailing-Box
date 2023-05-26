import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
// import DOMPurify from 'dompurify';
import "./MailingBox.css"

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { SendMailActions } from '../Redux Store/SendMail';

function MailingBox() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [ConvertedContent, SetConvertedContent]=useState(null)

    const Dispatch=useDispatch()
    
    
    useEffect(()=>{
        let html=convertToHTML(editorState.getCurrentContent())
        SetConvertedContent(html)
        Dispatch(SendMailActions.GetMessage(ConvertedContent))
    },[editorState,ConvertedContent])

    // function createMarkup(html) {
    //     return {
    //       __html: DOMPurify.sanitize(html)
    //     }
    //   }


    return (<>
        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
        />
        {/* <div dangerouslySetInnerHTML={createMarkup(ConvertedContent)}>

        </div> */}
    </>
    )
}

export default MailingBox;
