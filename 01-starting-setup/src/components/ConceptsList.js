import ConceptElement from "./ConceptElement";

const ConceptsList = (props) =>{
    return(
        <ul id="concepts">
        {props.concepts.map(concept =>(
            <ConceptElement
                key = {concept.title} 
                title = {concept.title}
                image = {concept.image}
                description = {concept.description}
            />
        ))}
      </ul>
    );
}

export default ConceptsList;