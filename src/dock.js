import React, { useState, useEffect } from "react";
import { CloseButton, Button, Container, Row, Col, Image} from 'react-bootstrap';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import QueryComponent from './query.js'
import RankingBar from './rankingbar.js'
import './dock.css'
 const MainComponent=()=>{
	const [imageDock, setImageDock] = useState([]);
	const [imageDockIDs, setImageDockIDs] = useState([]);
	function handleQueryImageClick(id, name, url){
		console.log("Adding Image with ID: "+id);
		var image = {
			id: id,
			name: name,
			url: url,
		};
		if(!imageDockIDs.includes(id)){
			setImageDockIDs(imageDockIDs=>[...imageDockIDs, id]);
			setImageDock(imageDock=>[...imageDock, image]);
		}
		else{
			console.log(id+" is in "+imageDockIDs);
		};
	};

	function removeImage(index)
	{
		console.log("Removing Image at "+index);
		let array = [...imageDock];
		let idarray = [...imageDockIDs];
		idarray.splice(index,1);
	    setImageDockIDs([...idarray]);
		array.splice(index,1);
		setImageDock([...array]);

	};

	function removeImageByID(id)
	{
		//console.log(imageDockIDs);
		console.log("Removing Image with ID: "+id);
		let idarray = [...imageDockIDs];
		console.log(idarray);
		let i= idarray.indexOf(id);
		console.log("Index: "+i);

		if(i>-1) removeImage(i);
	};

	return(
		<DndProvider backend={HTML5Backend}>
		<Container>
			<Row>
				<Col md="auto" className="QueryColumn">
					<QueryComponent handleImageClick={handleQueryImageClick}></QueryComponent>
				</Col>
				<Col>
					<Row>
						<Col className="ChartContainer">
							<Row>
								<Col>
									<RankingBar></RankingBar>
								</Col>
							</Row>
							<Row>
								<Col>
									<RankingBar></RankingBar>
								</Col>
							</Row>
							<Row>
								<Col>
									<RankingBar></RankingBar>
								</Col>
							</Row>
							</Col>
					</Row>
					<Row>
						<Dock imageDock={imageDock} handleRemoveImage={removeImage}></Dock>
					</Row>
					</Col>
			</Row>
		</Container>
		</DndProvider>
	);
};
export default MainComponent;
function Dock(props){
	return(

		<Container className="DockContainer">
			<Row>
			{
				props.imageDock.map((image, index)=>
				(
					<Col key={image.id} xs="auto">
					<div className="ImageWrapper">

					<DockImage url={image.url} index={index} name={image.name}  id={image.id}/>
						<CloseButton
						 onClick={()=>{props.handleRemoveImage(index)}}></CloseButton>


					</div>
					</Col>
				)
			)
			}
			</Row>
		</Container>
	);
}
//
// <!-- <div  className="RemoveDockImgBtn">
// <Button  variant="custom"
//  style={{color: "white",
//
// backgroundColor: "red",
// borderRadius: "50%"}}
//  onClick={()=>{props.handleRemoveImage(index)}}>X</Button>
//  </div> -->



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
		<Image className="DockImage "src={url} alt={name} index={index} key={id} rounded fluid/ >
		</div>
	);
}
