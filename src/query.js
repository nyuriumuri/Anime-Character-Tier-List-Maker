/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, Image } from "react";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useDrag } from 'react-dnd'
import {
  useQuery,
  useQueryClient,
} from "react-query";
import { request, gql } from "graphql-request";
import "./query.css"
import { Dropdown, DropdownButton, Card, Row, Col, Container, Button, FormControl, InputGroup, Form } from 'react-bootstrap';

const endpoint = "https://graphql.anilist.co";
export default function QueryComponent(props) {
const [searchString, setSearchString] = React.useState("Madoka Magica");
const [queryType, setQueryType] = React.useState("Anime");
  return (
	  <Container className="QueryContainer">
	  <Row>
	  	<Col>
			<SearchBar queryType={queryType} submitFunction={setSearchString} setQueryType={setQueryType} />
		</Col>
	  </Row>
	  <Row>
	  	<Col>
			 <Characters queryType={queryType} searchString={searchString} handleImageClick={props.handleImageClick} />
		</Col>
	  </Row>


   </Container>
  );
}


function useCharacters(searchString, type, page) {
  console.log(type);
  const variables= {
	 search: searchString , perPage: 25, page:page,
  }
  var gqlString=gql``;
  if(type=="Anime"){
	  gqlString= gql`
	  query AnimeCharacters($search: String $page: Int){
   Media(search:$search, type: ANIME){
     characters(sort: ROLE, page: $page, perPage: 25) {
	   pageInfo{
		   total
		   lastPage
	   },
       nodes {
         id,
         name {
             full
         },
         image {
           large
         },
       }
     }
   }
 }
	  `
  }
  	else {
		gqlString= gql`
  	  query Characters($search: String, $perPage: Int, $page: Int){
  	  Page(page: $page, perPage: $perPage){
  	    pageInfo{
  	      total
  	      currentPage
		  lastPage
  	    }
  	    characters(search:$search){
  		  id
  	      name {
  	        last
  	        first
  			full
  	      }
  	      image {
  	        large
  	      }
  	    }
  	  }
  	}
  	  `
  }
  return useQuery(["characters", variables, type], async () => {
    const
      characters
    = await request(
      endpoint,
     gqlString, variables
    );
    return characters;
  });
}



function Characters(props) {
  const [page, setPage] = useState(1);
  useEffect(()=>{
	  setPage(1);
  }, [props]);
  const { status, data, error, isFetching, isSuccess } = useCharacters(props.searchString, props.queryType, page);
  var chararray = [];
  var totalPages = 1;
  if(data){if(props.queryType=="Anime"){
	  if(data.Media) {
		  chararray=[...data.Media.characters.nodes];
		  totalPages=data.Media.characters.pageInfo.lastPage;
		  console.log("Pages: "+ totalPages);
		  }
  }
  else {
  	 if(data.Page) {
		 chararray=[...data.Page.characters];
		 totalPages=data.Page.pageInfo.lastPage;
		 console.log("Pages: "+ totalPages);
	 }
 }}
  return (
      <Container >
	  <Row xs="auto" xl="auto" className="CharacterBar" >
	  <Col fluid>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
		  	<Row className="CharacterBarRow">
             {chararray.map((character,index)=>
				 (
				<Col xl="auto" xs="auto" key={character.id}>
				<Card bg="black" className="CharCard" >
				 <DockImage url={character.image.large} name={character.name.full} id={character.id} index={index}></DockImage>
				  <span className="CharName">{character.name.full}</span>

				 </Card>
				   </Col>
                 ))}
			</Row>
          </>
        )}
		</Col>
	    </Row>
		<Row >
			<Col >
				<Button variant="outline-secondary mt-2" onClick={()=>((page>1)?setPage(page-1):null)}><FaArrowLeft /></Button>
			</Col>
			<Col >
				<Button variant="outline-secondary mt-2" onClick={()=>((page<totalPages)?setPage(page+1):null)}><FaArrowRight /></Button>
			</Col>
		</Row>
      </Container>
  );
}

function DockImage(props)
{
	const {url, name, index, id} = props;
	const [{isDragging}, drag] = useDrag(()=>({
		type: 'image',
		item: {id: id, name: name, url: url} ,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));
	return(
		<div ref={drag}>
		<img className="CharImg" src={url} alt={name} index={index} key={id} / >
		</div>
	);
}

function SearchBar(props){
	const [searchPlaceHolder, setSearchPlaceHolder] = React.useState("Madoka Magica");
	return(

	 <Container className="searchBarContainer pt-2" >
	 <Form onSubmit={(e)=>{
		 e.preventDefault();
		 props.submitFunction(searchPlaceHolder);
	 }}>
	 <InputGroup className="mb-3">
	 <DropdownButton
	  title={props.queryType}
	  variant="outline-secondary"
	  id="input-group-dropdown-1"
	  onSelect={(e)=>props.setQueryType(e)}
	>
	  <Dropdown.Item eventKey="Anime">Anime</Dropdown.Item>
	  <Dropdown.Item eventKey="Character">Character</Dropdown.Item>
	</DropdownButton>
		<FormControl value={searchPlaceHolder} onChange={(e)=>{setSearchPlaceHolder(e.target.value)}}
		 />
	  </InputGroup>
	 </Form>
	 </Container>
	);
}

function handleImageClick(){
}
// <img className="CharImg" src={character.image.large} onClick={()=>props.handleImageClick(character.id, character.name.full, character.image.large)}/>
