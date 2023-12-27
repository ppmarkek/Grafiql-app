import { Viewer } from './styles';

interface Props {
  jsonData: string;
}

export const JsonViewer = ({ jsonData }: Props) => {
  try {
    const parsedData = JSON.parse(jsonData);
    return (
      <Viewer>
        <pre>{JSON.stringify(parsedData, null, 2)}</pre>
      </Viewer>
    );
  } catch (error) {
    return <div>Error parsing JSON</div>;
  }
};
