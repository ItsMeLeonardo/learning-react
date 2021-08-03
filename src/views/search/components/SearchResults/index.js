import SearchItems from '../SearchItems';
import './style.css'


export default function SearchResults({results, isSearching}) {
  return (
    <div>
      <ul className="list-results">
        {!results?.length && isSearching && <li>No results found</li>}
        {results?.map(result => {
          return (
            <li key={result.id}>
              <SearchItems 
              name={result.name} 
              email={result.email}
              username={result.username}/>
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