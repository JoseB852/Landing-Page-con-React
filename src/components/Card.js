export const Card = (props) => {
   
    return <>


        <div>
            <div className="card tex-center bg-dark " style={{width: "100%"}}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title ">{props.title}</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="https://www.marca.com/" target="blank" className="btn btn-dark">Website</a>
                </div>
            </div>
        </div>
        <br>
        </br>
        </>
    
}

export default Card
