import { FC } from 'react';

interface JsonObject {
  [key: string]: JsonValue;
}

type JsonArray = Array<JsonValue>;

type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

interface Props {
  data: JsonValue;
  indent?: number;
  multiline?: boolean;
  multilineKeys?: string[];
}

const INDENT = 2;

const JsonViewer: FC<Props> = ({ data, indent = 0, multiline = false, multilineKeys = [] }) => {
  const pad = ' '.repeat(indent * INDENT);
  const innerPad = ' '.repeat((indent + 1) * INDENT);

  if (data === null) {
    return <span className="text-[#569CD6]">null</span>;
  }

  if (typeof data === 'boolean') {
    return <span className="text-[#569CD6]">{data.toString()}</span>;
  }

  if (typeof data === 'number') {
    return <span className="text-[#B5CEA8]">{data}</span>;
  }

  if (typeof data === 'string') {
    return <span className="text-[#CE9178]">&quot;{data}&quot;</span>;
  }

  if (Array.isArray(data)) {
    if (data.length === 0) return <span className="text-[#D4D4D4]">[]</span>;

    if (multiline) {
      return (
        <>
          <span className="text-[#D4D4D4]">[</span>
          {data.map((item, i) => (
            <span key={i}>
              {'\n'}
              {innerPad}
              <JsonViewer data={item} indent={indent + 1} multilineKeys={multilineKeys} />
              {i < data.length - 1 && <span className="text-[#D4D4D4]">,</span>}
            </span>
          ))}
          {'\n'}
          {pad}
          <span className="text-[#D4D4D4]">]</span>
        </>
      );
    }

    return (
      <>
        <span className="text-[#D4D4D4]">[</span>
        {data.map((item, i) => (
          <span key={i}>
            <JsonViewer data={item} indent={indent + 1} multilineKeys={multilineKeys} />
            {i < data.length - 1 && <span className="text-[#D4D4D4]">, </span>}
          </span>
        ))}
        <span className="text-[#D4D4D4]">]</span>
      </>
    );
  }

  if (typeof data === 'object') {
    const entries = Object.entries(data);
    if (entries.length === 0) return <span className="text-[#D4D4D4]">{'{}'}</span>;
    return (
      <>
        <span className="text-[#D4D4D4]">{'{'}</span>
        {entries.map(([key, value], i) => (
          <span key={key}>
            {'\n'}
            {innerPad}
            <span className="text-[#9CDCFE]">&quot;{key}&quot;</span>
            <span className="text-[#D4D4D4]">: </span>
            <JsonViewer
              data={value}
              indent={indent + 1}
              multiline={multilineKeys.includes(key)}
              multilineKeys={multilineKeys}
            />
            {i < entries.length - 1 && <span className="text-[#D4D4D4]">,</span>}
          </span>
        ))}
        {'\n'}
        {pad}
        <span className="text-[#D4D4D4]">{'}'}</span>
      </>
    );
  }

  return null;
};

export default JsonViewer;
