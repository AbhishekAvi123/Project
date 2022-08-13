import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Card.css"


const Cardupload = () => {



    const [data, setData] = useState([])



    let url = 'https://api.pokemontcg.io/v2/cards?page=1&pageSize=10'



    
    function code() {

        axios.get(url)
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
            })
        // .catch((err) => console.log(err))
    }



    useEffect(() => {
        code()
       

    }, [])




    return (<>


        <div className='Data-card'>

            {


                data.map((value) => {

                    return (
                        <>
                            <div className='col-Card-main'>
                                <div className='col-full'>
                                    <div className='col-img'>
                                        <img src={value.images.small} alt="img" />
                                    </div>
                                    <div className='col-name'>
                                        <h3> {value.name}</h3>
                                        <h4> HP: {value.hp}</h4>
                                    </div>
                                    <h3>Attacks :</h3>
                                    <p> {value.attacks[0].name}</p>
                                    <h3> Abilities : </h3>
                                    <p> NA </p>











                                </div>






                            </div>
                        </>
                    )


                })

            }

        </div>
    </>



    )

}



export default Cardupload