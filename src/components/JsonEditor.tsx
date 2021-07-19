import { Box, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";

const JsonEditor = (props: any) => {
  const { colorMode } = useColorMode();
  const [srcObj, setSrcObj] = useState<any>({});
  const [isErrJson, setIsErrJson] = useState<boolean>(false);
  const onChange = (newValue: string) => {
    props.onChange?.(newValue);
  };

  return (
    <Box {...props}>
      <AceEditor
        mode="json"
        placeholder={props.placeholder || "Enter JSON string here"}
        theme={colorMode === "dark" ? "twilight" : "xcode"}
        enableBasicAutocompletion={true}
        tabSize={props.indent || 4}
        readOnly={props.disabled || false}
        onChange={onChange}
        height="100%"
        width="100%"
        editorProps={{ $blockScrolling: true }}
        style={{
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          marginTop: 0,
          paddingTop: 4,
        }}
        debounceChangePeriod={700}
      />
    </Box>
  );
};

export default JsonEditor;
