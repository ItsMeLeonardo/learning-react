import SearchItems from '../SearchItems';
import './style.css'


export default function SearchResults({results, isSearching}) {
  return (
    <div className="result-container">
      <ul className="list-results">
        {isSearching && <li className="txt-bold results" key="0">
          {isSearching ? `${results.length} results were found` : '0 results found' }
        </li>}
        {results?.map(result => {
          return (<SearchItems {...result} key={result.id}/>);
        })}
      </ul>
    </div>
  );
}