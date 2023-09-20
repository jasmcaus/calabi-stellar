import React from "react"

function RTokenIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M50 100C22.386 100 0 77.614 0 50S22.386 0 50 0s50 22.386 50 50-22.386 50-50 50zm-3.122-61.917c0-.277.225-.503.503-.503h9.417a2.398 2.398 0 012.398 2.399v5.404a2.397 2.397 0 01-2.397 2.398h-9.418a.503.503 0 01-.503-.503v-9.195zM31 43.419c0 .321.259.58.58.58h7.272v3.733H31.58a.58.58 0 00-.58.58v6.116a.58.58 0 00.58.579h7.272v14.622c0 .277.225.503.503.503h7.02a.503.503 0 00.503-.503V55.753c0-.278.225-.503.503-.503h5.634c.2 0 .381.118.461.302l6.202 14.277c.08.184.262.303.462.303h7.538a.503.503 0 00.461-.705l-6.157-14.006a.503.503 0 01.306-.674c3.038-1.087 4.935-3.826 4.935-7.412v-8.917A8.417 8.417 0 0058.806 30H39.355a.503.503 0 00-.503.503v6.222H31.58a.579.579 0 00-.58.579v6.115z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    )
}

export default RTokenIcon
