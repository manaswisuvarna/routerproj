import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className=' m-4 bg-gray-600 text-white p-4 text-3xl flex'>
            <div >
                <img className='mx-4 my-1 rounded-full' src={data.avatar_url} alt="Git picture" width={250} />
            </div>

            <div className='text-center'>
                <div className='text-start mx-7 mt-5'>
                    <h2>{data.name}</h2>
                    <h3>{data.login}</h3>
                </div>
                

                <div className='flex justify-around'>
                    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>

                        Followers : {data.followers}
                    </div>
                    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>

                        Following : {data.following}
                    </div>
                    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>

                        Repository : {data.public_repos}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/manaswisuvarna')
    return response.json()
}