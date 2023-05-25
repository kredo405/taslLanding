import Editor from "@monaco-editor/react";
import { useState } from "react";

const files = {
    "Main.java": {
        name: "Main.java",
        language: "java",
        value: 'public class Test { \n  public static void main(String[] args){ \n System.out.println("Hello, World!"); \n} \n}',
    },
    "style.css": {
        name: "style.css",
        language: "css",
        value: "css",
    },
    "index.html": {
        name: "index.html",
        language: "html",
        value: "html",
    },
};

const EditorCode = () => {
    const [fileName, setFileName] = useState("Main.java");

    const file = files[fileName];

    return (
        <>
            <div className="flex bg-gray-950">
                <button
                    disabled={fileName === "Main.java"}
                    onClick={() => setFileName("Main.java")}
                    className="text-slate-50 border-x-2 border-solid border-slate-500 px-4 py-3"
                >
                    Main.java
                </button>
                <button
                    disabled={fileName === "style.css"}
                    onClick={() => setFileName("style.css")}
                    className="text-slate-50 border-x-2 border-solid border-slate-500 px-4 py-3"
                >
                    style.css
                </button>
                <button
                    disabled={fileName === "index.html"}
                    onClick={() => setFileName("index.html")}
                    className="text-slate-50 border-x-2 border-solid border-slate-500 px-4 py-3"
                >
                    index.html
                </button>
            </div>
            <Editor
                height="49vh"
                theme="vs-dark"
                path={file.name}
                defaultLanguage={file.language}
                defaultValue={file.value}
            />
        </>
    );
};

export default EditorCode;
