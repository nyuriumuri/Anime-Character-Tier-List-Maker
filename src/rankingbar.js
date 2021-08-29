import React, { useState, useEffect, useCallback, useRef } from "react";
import { CloseButton, Button, Container, Row, Col, Image, InputGroup, FormControl} from 'react-bootstrap';
import { DndProvider, useDrag, useDrop,   } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SketchPicker } from 'react-color';

import './rankingbar.css'
import update from 'immutability-helper';


export default function RankingBar(props)
{
	const [images, setImages] = useState([]);
	const [dropLock, setDropLock] = useState(false);
	function handleDropImage(url, name, id, barindex){

			if(url && name && id)
		     {
				 var image = {
					 id: id,
					 name: name,
					 url: url,
				 };
				 	console.log("url: "+url+" id: "+id+" name: "+name);
				    setImages(images=>[...images, image]);

			}

	};

	function dropItem(item, to, barIndex){
		if(item.barIndex==props.barIndex)
		{
			let from= item.index;
			console.log("from: "+from+" to: "+to);
			let newImages = [...images];
			let item = newImages[from];
			newImages.splice(from,1);
			newImages.splice(to,0,item);
			setImages(images=>[newImages]);
	}
	}

	// function handleRemoveRankingImage(index){
	//
	// 	setImages(images=>update(images, {
	// 		$splice: [
	// 			[index, 1 ],
	// 		],
	// 	}));
	// 	console.log("Removing Image at Index "+index+ " "+images[index].name);
	// 	// let array = [...images];
	// 	// array.splice(index,1);
	// 	// setImages(images=>([...array]));
	// };
	const handleRemoveRankingImage = useCallback((index) =>{
		//
		// setImages(images=>update(images, {
		// 	$splice: [
		// 		[index, 1 ],
		// 	],
		// }));
		 console.log("Removing Image at Index "+index+ " "+images[index].name);
		// let array = [...images];
		// array.splice(index, 0);
		// console.log([...array]);
		// setImages(images=>([...array]));
		setImages(images=>([...images.slice(0,index), ...images.slice(index+1)]));
	}, [images]);
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item, monitor) => (
			handleDropImage(item.url, item.name, item.id, item.barIndex)

		),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

	 const isActive = canDrop && isOver;
	 let backgroundColor = 'black';
	 if (isActive) {
		 backgroundColor = '#3fe74b';
	 }
	 else if (canDrop) {
		 backgroundColor = '#3f92e7';
	 }
	 // return (
		//  <div ref={drop}  style={{backgroundColor }}>
		//  <Container className="RankingBar" fluid>
		// 	 <Row xs="auto" xl="auto" className="RankingRow" noGutters>
		// 	 <Col className="RankBoxCol">
		// 		<RankBox color={props.color} text={props.text}></RankBox>
		// 	 </Col>
		// 	 <Col>
		// 	 	<Container  fluid>
		// 	 		<Row>
		// 	 {
	 //
		// 		 images.map((image, index)=>
		// 		 (
		// 			 <Col key={index} className="RankingCol" xl="auto" xs="auto">
	 //
		// 			 <Image className="RankingImage" src={image.url} alt={image.name}  id={image.id} onClick={()=>{handleRemoveRankingImage(index)}}/>
	 //
	 //
		// 			 </Col>
		// 		 )
		// 	 )
		// 	 }
		// 	 </Row>
		//  </Container>
		// 	 </Col>
		// 	 </Row>
		//  </Container>
	 //
		//  </div>);
		return (
			<div ref={drop}  style={{backgroundColor }}>
			<div className="RankingBar">
				<div className="RankBoxCol">
				   <RankBox color={props.color} index={props.index} handleChange={props.handleBoxChange} text={props.text}></RankBox>
				</div>
				<div className="RankingImagesWrapper">

				{

					images.map((image, index)=>
					(
						<div key={index} className="RankingImgWrapper">


						<RankingImage url={image.url} name={image.name} barIndex={index} index={index} dropItem={dropItem} handleRemove={handleRemoveRankingImage} id={image.id}/>


						</div>
					)
				)
				}

				</div>
				</div>
			</div>
		);
}

function RankBox(props){
	const [boxColor, setBoxColor] = useState(props.color);
	const [text, setText] = useState(props.text);
	const [fontsize, setFontSize] = useState(30);
	function handleColorChange(color, event){
		// props.handleChange(props.index, color, props.text);
		setBoxColor(color.hex);
	};
	const [clicked, setClicked] = useState(false);
	if(clicked)
	{return(
		<div>
			<div className="RankBox" style={{backgroundColor: boxColor, fontSize: ""+fontsize+"px"}}  onClick={()=>setClicked(false)}>{text}</div>
			<div>
				<InputGroup>
					<FormControl value={text} className="boxTextInput" onChange={(e)=>{setText(e.target.value)}}></FormControl>
					<FormControl value={fontsize} type="number" className="boxFontInput" onChange={(e)=>{setFontSize(e.target.value)}}></FormControl>
					<InputGroup.Text id="inputGroup-sizing-sm">px</InputGroup.Text>
				</InputGroup>
				<SketchPicker
				 color={boxColor}
				 onChange={handleColorChange}
				 presetColors={["#ED254E","#FE9000","#FFDD4A", "#59CD90","#4C5760"]}
				/>
			</div>
		</div>
	);}else{
		return(<div className="RankBox" style={{backgroundColor: boxColor, fontSize: ""+fontsize+"px"}} onClick={()=>setClicked(true)}>{text}</div>);
	}
}


function RankingImage(props)
{
	const {url, name, index, id, barIndex} = props;
	const [buttonStyle, setButtonStyle] =useState({display: 'none'});

	const [{isDragging}, drag] = useDrag(()=>({
		type: 'image',
		item: {id: id, name: name, url: url, index: index, barIndex: barIndex } ,
		end: (item, monitor) => {
           props.handleRemove(index);
        },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}), [props]);

	return(
		<div ref={drag} onMouseEnter={e => {
                     setButtonStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setButtonStyle({display: 'none'})
                 }} className="RankingImgWrapper">
		<img src={url}  className="RankingImg" alt={name} index={index} key={id} / >
		<button style={buttonStyle} className="DltButton" onClick={()=>props.handleRemove(index)}>X</button>
		</div>
	);
}
