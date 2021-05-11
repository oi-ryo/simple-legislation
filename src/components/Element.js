import React, { useState, useEffect, useRef } from "react";
import { Editor, EditorState, convertFromRaw, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const styleMap = {
  CHANGED: {
    color: "#f14668",
    "background-color": "#feecf0",
    "font-weight": "bold",
  },
};

const Element = (props) => {
  const initData = convertFromRaw({
    entityMap: {},
    blocks: [
      {
        key: props.key,
        text: props.text,
        type: "undifined",
        depth: 0,
        entityRanges: [],
        inlineStyleRanges: [],
        data: {},
      },
    ],
  });

  const [editorEnable, setEditorEnable] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(initData)
  );
  const editorRef = useRef(null);

  useEffect(() => {
    setEditorEnable(true);
  }, []);

  const handleBoldClick = (event) => {
    event.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "CHANGED"));
  };

  return (
    <div className="columns is-vcentered">
      <div className="column">
        <div className="box">{props.text}</div>
      </div>
      <div className="column is-1 has-text-centered">
        <span className="icon has-text-grey-light">
          <i className="fas fa-caret-right"></i>
        </span>
      </div>
      <div className="column">
        <div className="box">
          <div
            onClick={() => {
              editorRef.current?.focus();
            }}
          >
            {editorEnable && (
              <>
                <div onMouseDown={handleBoldClick}>
                  <Editor
                    ref={editorRef}
                    customStyleMap={styleMap}
                    editorKey="test-key"
                    editorState={editorState}
                    onChange={setEditorState}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
