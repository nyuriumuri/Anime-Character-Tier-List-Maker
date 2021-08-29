import React, { useState, useEffect } from "react";
import {FaRegTrashAlt} from "react-icons/fa";
import {FiPlus, FiCamera} from "react-icons/fi";
import {saveAs} from 'file-saver';
import domtoimage from 'dom-to-image';
import { CloseButton, Button, Container, Row, Col, Image, ButtonGroup} from 'react-bootstrap';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import QueryComponent from './query.js'
import RankingBar from './rankingbar.js'
import download from 'downloadjs';
import './dock.css'
 const MainComponent=()=>{

	const[bars,setBars]=useState([
		{
			color: "#ED254E",
			text: "S",
		},
		{
			color: "#FE9000",
			text: "A",
		},
		{
			color: "#FFDD4A",
			text: "B",
		},
		{
			color: "#59CD90",
			text: "C",
		},
		{
			color: "#4C5760",
			text: "D",
		},
		]);

	function pushBar(){
		var newBar;
		switch(bars.length){
			case 0:
				newBar = {
					color: "#ED254E",
					text: "S",
				};
				break;
			case 1:
				newBar = {
					color: "#FE9000",
					text: "A",
				};
				break;
			case 2:
				newBar = {
					color: "#FFDD4A",
					text: "B",
				};
				break;
			case 3:
				newBar ={
					color: "#59CD90",
					text: "C",
				};
				break;
			case 4:
				newBar = {
					color: "#4C5760",
					text: "D",
				};
				break;
			default:
				newBar = {
					color: "#4C5760",
					text: bars.length<26? String.fromCharCode(64+bars.length) : "?",
				};
				break;
		}
		setBars(bars=>[...bars, newBar,]);
	};

	function popBar(){
		let newbars = [...bars];
		newbars.pop();
		setBars(bars=>[...newbars]);
	};
	function handleBarChange(index, color, text){
	 	let temp_bars = [...bars];
		temp_bars[index] = {
			color: color,
			text: text
		};
		setBars(bars=>[...temp_bars]);
	};
	return(
		<DndProvider backend={HTML5Backend}>
		<Container fluid>
			<Row>
				<Col md="auto" className="QueryColumn">
					<QueryComponent></QueryComponent>
				</Col>
						<Col className="ChartContainer">
							<div className="ChartContainerBarsWrapper">
							<div id="ScreenshotElement" >
							{
								bars.map((bar,index)=>(
									<Row key={index}>
									<Col >
										<RankingBar color={bar.color} text={bar.text} index={index} handleBoxChange={handleBarChange}></RankingBar>
									</Col>
									</Row>
								))
							}
							</div>
							</div>
							<Row className="justify-content-md-end">
							<Col  md="auto">
								<ButtonGroup className="mr-4 pt-4">
									<Button variant="outline-secondary" onClick={()=>pushBar()}><FiPlus /></Button>
									<Button variant="outline-secondary" onClick={()=>popBar()}><FaRegTrashAlt /></Button>
									<Button onClick={()=>domtoimage.toBlob(document.getElementById('ScreenshotElement'))
								    .then(function (blob) {
								        saveAs(blob, 'chart.png');
								    })}
									variant="outline-secondary"><FiCamera /></Button>
								</ButtonGroup>
							</Col>
							</Row>

							</Col>

			</Row>
		</Container>
		</DndProvider>
	);
};
export default MainComponent;
