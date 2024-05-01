import { useGetDefinitionQuery } from "../features/api/apiSlice";
import playIcon from "/assets/images/icon-play.svg";
import newWindowIcon from "/assets/images/icon-new-window.svg";

const Definition = ({ word }) => {
  const { data, isFetching, isSuccess, isError, error } =
    useGetDefinitionQuery(word);

  if (isFetching) return <p>Loading...</p>;

  if (isSuccess) {
    const definition = data[0];
    return (
      <div className="definitionSection">
        <div className="topSection">
          <div className="columnContainer">
            <h1>{definition.word}</h1>
            <p>{definition.phonetic}</p>
          </div>
          <img src={playIcon} />
        </div>
        <div className="meaningSection">
          {definition.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <h3 className="partOfSpeech">{meaning.partOfSpeech}</h3>
                <p className="heading">Meaning</p>
                <ul>
                  {meaning.definitions.map((item, index) => (
                    <>
                      <li key={index}>{item.definition}</li>
                      {item.example && (
                        <p className="example">&ldquo;{item.example}&rdquo;</p>
                      )}
                    </>
                  ))}
                </ul>
                {meaning.synonyms.length > 0 && (
                  <p className="heading headingSynonyms">
                    Synonyms{" "}
                    <span className="synonyms">
                      {meaning.synonyms.join(", ")}
                    </span>
                  </p>
                )}
                {meaning.antonyms.length > 0 && (
                  <p className="heading">
                    Antonymns{" "}
                    <span className="synonyms">
                      {meaning.antonyms.join(", ")}
                    </span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="source">
          <p className="heading">Source </p>
          <a
            className="sourceLink"
            href={definition.sourceUrls[0]}
            target="_blank"
          >
            {definition.sourceUrls[0] + "    "}
            <img src={newWindowIcon} />
          </a>
        </div>
      </div>
    );
  }
};

export default Definition;
