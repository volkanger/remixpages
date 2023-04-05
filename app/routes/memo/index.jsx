import { Link } from '@remix-run/react'

export default function DemoFolder() {
    return (
        <>
            <h1> Hello from memo folders index file</h1>
            <Link to="../demo">Go to demo page</Link>
        </>
    )
}