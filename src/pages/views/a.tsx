import Link from 'next/link'
import { Component, ReactNode } from 'react'

export default class HomePage extends Component{
   constructor(props: any){
    super(props)
   }

   render(): ReactNode {
     return (
      <>
        <p className='text-xl text-purple-400'>Am a</p>
      </>
     )
   }
}
