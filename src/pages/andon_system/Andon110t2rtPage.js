import React, {useState, useEffect, useRef} from 'react';

//Library Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//Library API
import axios from "axios";

//Import config URL API
import { BASE_URLAPI } from '../../config/URLAPI'; 

//Import Audio
import song from "../../assets/audio/Alert.mp3";
import song2 from "../../assets/audio/Alarmsound.mp3";
import ReactAudioPlayer from 'react-audio-player';

import { useTimer } from 'react-timer-hook';

const Andon110t2rt = () => {

    //Declare useState for Play/pause audio
    const [audioStatus, changeAudioStatus] = useState(false);
    const myRef = useRef();

    //Declare useState for Show Modal
    let [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    //Declare useState for get data AXIOS 
    const [getandon1, setGetandon1] = useState([]);
 
    //get data status Andon 110T 2RT
    const getData_andon = () => {
        axios
        .get(`${BASE_URLAPI}/api/getandondataline110t2rt`)
        .then(res => {
            setGetandon1(res.data.data);
        })
    }

    //Function playing audio
  
    const startAudio = () => {
      myRef.current.play();

      changeAudioStatus(true);
    };

    const pauseAudio = () => {
      console.log("here");
      myRef.current.pause();
      changeAudioStatus(false);
    };

    //useEffect for Re render Component , even first running 
    useEffect(() => {
         getData_andon();
    }, [getandon1]);

    return(
    <Container>
        <h1 style={{marginBottom:'5%'}}>MONITORING OF ANDON SYSTEM LINE 110T 2RT</h1>
      
        <Row style={{backgroundColor:'#59cd17'}} className="d-flex flex-row-reverse">
        {
        getandon1.map((value) => {
            return(
                
                    <Card style={{ width:'70px', height:'70px', margin:'5px'}}>
                        <Card.Title style={{fontSize:9}}>{value.machine_no}</Card.Title>
                        {
                            (() => {
                                switch(value.machine_stts) {
                                    case "true"   : return <><div onload={startAudio} style={{width:'40px', height:'40px', backgroundColor:'#FCB814'}}></div> {show = true}</>;
                                    case "false"  : return <><div style={{width:'40px', height:'40px', backgroundColor:'grey'}}></div></>;
                                    default     : return <div style={{width:'40px', height:'40px', backgroundColor:'black'}}></div>;
                                }
                            })()
                        }
                    </Card>
            )
        })
        
        }
        </Row>
        {/* <Button onClick={playPause}>Click to Play Audio</Button> */}

         {/* <Button variant="primary" onClick={handleShow} sel>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered>

        <Modal.Header style={{paddingLeft:'17%'}}>
          <Modal.Title>Hurry Up ! Operator Call You!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5> Line 110T 2RT, Please Check : </h5>
          <ReactAudioPlayer
              src={song2}
              autoPlay
              loop
              // controls
            />
          {
            getandon1.map((value) => {
            return(
           
             <h5>{value.machineno_call}</h5>
            )
        })
          }
        </Modal.Body>
      </Modal>
        
        <audio ref = {myRef} src= {song} loop/>
        {audioStatus ? (
        <Button onClick={pauseAudio}>ON Audio</Button>
          ) : (
            <Button onClick={startAudio}>OFF Audio</Button>
          )}

    </Container>
    )
}

export default Andon110t2rt;