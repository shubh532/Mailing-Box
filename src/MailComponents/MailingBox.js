import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import "./MailingBox.css"

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { SendMailActions } from '../Redux Store/MailHandler';

function MailingBox() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [ConvertedContent, SetConvertedContent] = useState(null)

    const Dispatch = useDispatch()


    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent())
        SetConvertedContent(html)
        Dispatch(SendMailActions.GetMessage(ConvertedContent))
    }, [editorState, ConvertedContent, Dispatch])


    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
        />
    )
}

export default MailingBox;
