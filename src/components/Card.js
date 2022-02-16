import '../components.css'

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }

    const cardStyle = {
      maxWidth: 'fit-content',
      minWidth: '300px',
      marginLeft:0
    }
  
    return (
      <div className={classes()} style={cardStyle}>
        <div className='card-header'>{props.header}</div>
        <div className='card-body'>
          {props.title && (<h5 className='card-title'>{props.title}</h5>)}
          {props.text && (<p className='card-text'>{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  export default Card;