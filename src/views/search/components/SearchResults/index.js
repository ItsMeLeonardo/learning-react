import SearchItems from '../SearchItems';
import './style.css'


export default function SearchResults({results, isSearching}) {
  return (
    <div className="result-container">
      <ul className="list-results">
        {isSearching && <li className="txt-bold" >
          {isSearching ? `${results.length} results were found` : '0 results found' }
        </li>}
        {results?.map(result => {
          return (
            <li key={result.id }>
              <SearchItems 
                name={result.name} 
                email={result.email}
                username={result.username}
              />
            </li>
            /*<li key={result.id}>
            //this is use when the attributes are very long
            <SearchItems {...result}/>
          </li>*/
          );
        })}
      </ul>
    </div>
  );
}