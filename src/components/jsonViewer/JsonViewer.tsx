interface Props {
  jsonData: string;
}

export const JsonViewer = ({ jsonData }: Props) => {
  try {
    const parsedData = JSON.parse(jsonData);
    return <pre>{JSON.stringify(parsedData, null, 2)}</pre>;
  } catch (error) {
    return <div>Error parsing JSON</div>;
  }
};
