import React from 'react'
import { Balancer } from 'react-wrap-balancer'

export default function TextBlock(props: { text: string; className?: string }) {
    return (
        <p className={props.className}>
            <Balancer>{props.text}</Balancer>
        </p>
    )
}
