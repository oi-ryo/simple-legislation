import React, { useState, useEffect, useRef } from "react";
import { Editor, EditorState, convertFromRaw, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import "../styles/App.css";
import Navbar from "./Navbar";

const styleMap = {
  CHANGED: {
    color: "#f14668",
    "background-color": "#feecf0",
    "font-weight": "bold",
  },
};

const DraftJSEditor = (props) => {
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
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="box">
          <div className="block">
            <p className="title">
              行政手続における特定の個人を識別するための番号の利用等に関する法律施行令の一部を改正する政令
            </p>
          </div>
        </div>
        <div className="box">
          <div className="columns is-vcentered has-text-centered has-text-weight-bold is-size-4">
            <div className="column">
              <div className="box has-background-grey-lighter">改正前</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box has-background-grey-lighter">
                <span className="has-text-danger">改正後</span>
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">第一章　総則</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">第一章　総則</div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">（個人番号カードの記載事項）</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">
                <DraftJSEditor
                  text={"（個人番号カードの記載事項）"}
                  key="mock1"
                />
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">
                第一条　行政手続における特定の個人を識別するための番号の利用等に関する法律（以下「法」という。）第二条第七項の政令で定める事項は、次に掲げる事項とする。
              </div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">
                第一条　行政手続における特定の個人を識別するための番号の利用等に関する法律（以下「法」という。）第二条第七項の政令で定める事項は、次に掲げる事項とする。
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">
                一　個人番号カードの有効期間が満了する日
              </div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">
                <DraftJSEditor
                  text={"一　個人番号カードの有効期間が満了する日"}
                  key="mock2"
                />
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">
                二　本人に係る住民票に住民基本台帳法施行令（昭和四十二年政令第二百九十二号）第三十条の十三に規定する旧氏が記載されているときは、当該旧氏
              </div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">
                二　本人に係る住民票に住民基本台帳法施行令（昭和四十二年政令第二百九十二号）第三十条の十三に規定する旧氏が記載されているときは、当該旧氏
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">
                三　本人に係る住民票に住民基本台帳法施行令第三十条の十六第一項に規定する通称が記載されているときは、当該通称
              </div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">
                三　本人に係る住民票に住民基本台帳法施行令第三十条の十六第一項に規定する通称が記載されているときは、当該通称
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">第二章　個人番号</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">第二章　個人番号</div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">（個人番号の指定）</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">
                <DraftJSEditor text={"（個人番号の指定）"} key="mock3" />
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">
                第二条　法第七条第一項又は第二項の規定による個人番号の指定は、法第八条第二項の規定により、市町村長（特別区の区長を含む。以下同じ。）が、地方公共団体情報システム機構（以下「機構」という。）から個人番号とすべき番号の通知を受けた時に行われたものとする。
              </div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">
                第二条　法第七条第一項又は第二項の規定による個人番号の指定は、法第八条第二項の規定により、市町村長（特別区の区長を含む。以下同じ。）が、地方公共団体情報システム機構（以下「機構」という。）から個人番号とすべき番号の通知を受けた時に行われたものとする。
              </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">xxx</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">xxx</div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">xxx</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">xxx</div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column">
              <div className="box">xxx</div>
            </div>
            <div className="column is-1 has-text-centered">
              <span className="icon has-text-grey-light">
                <i className="fas fa-caret-right"></i>
              </span>
            </div>
            <div className="column">
              <div className="box">xxx</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
