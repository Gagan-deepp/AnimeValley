import { fetchAnime } from '@/lib/actions/fetch.action'
import React from 'react'
import Card from './Card'

const TopContent = async () => {

    const data = await fetchAnime(1)
    return (

        <section className='slideWrapper' >
            <div>
                <h2 className='font-heading font-bold text-3xl' > Top Content </h2>
            </div>
            <div>
                <Card data={data}/>
            </div>

        </section>
    )
}

export default TopContent